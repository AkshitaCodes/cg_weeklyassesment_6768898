import { test, expect } from "@playwright/test";
import bookingData from "../../test-data/bookingdata.json";

test("herokuapp", async ({ request }) => {

  // create token
  let createtoken = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "admin",
        password: "password123"
      }
    }
  );

  expect(createtoken.status()).toBe(200);

  let tokenRes = await createtoken.json();
  let token = tokenRes.token;
  expect(token).toBeTruthy(); 
  console.log("Token:", token);





  // get booking ids
  let getBooking = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );
  expect(getBooking.status()).toBe(200);

  let bookingList = await getBooking.json();
  let bookingid = bookingList[0].bookingid;
  expect(bookingid).toBeTruthy();
  console.log("Existing Booking ID:", bookingid);





  // create booking
  let createBooking = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: bookingData.createBooking
    }
  );
  expect(createBooking.status()).toBe(200);
  let newBooking = await createBooking.json();
  expect(newBooking.bookingid).toBeTruthy();
  expect(newBooking.booking.firstname).toBe(bookingData.createBooking.firstname);
  expect(newBooking.booking.lastname).toBe(bookingData.createBooking.lastname);
  console.log("new booking : ",newBooking);
  let bookingid1 = newBooking.bookingid;





  // update booking 
  let updatebooking = await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingid1}`,
    {
      data: bookingData.updateBooking,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Cookie": `token=${token}`
      }
    }
  );
  expect(updatebooking.status()).toBe(200);
  let updatedBooking = await updatebooking.json();
  expect(updatedBooking.firstname).toBe(bookingData.updateBooking.firstname);
  expect(updatedBooking.lastname).toBe(bookingData.updateBooking.lastname);
  expect(updatedBooking.totalprice).toBe(bookingData.updateBooking.totalprice);
  console.log("updated booking : ",updatedBooking);



  
  // partial update 
  let updatepartialbooking = await request.patch(
    `https://restful-booker.herokuapp.com/booking/${bookingid1}`,
    {
      data: bookingData.partialUpdate,
      headers: {
        "Content-Type": "application/json",
        "Cookie": `token=${token}`
      }
    }
  );
  expect(updatepartialbooking.status()).toBe(200);
  let partialupdatedBooking = await updatepartialbooking.json();
  expect(partialupdatedBooking.firstname).toBe(bookingData.partialUpdate.firstname);
  console.log("partial updated booking : ",partialupdatedBooking);




  // delete booking
  // let deletebooking = await request.delete(
  //   `https://restful-booker.herokuapp.com/booking/${bookingid1}`,
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Cookie": `token=${token}`
  //     }
  //   }
  // );
  // expect(deletebooking.status()).toBe(201); 
  // let deletedBooking = await deletebooking.json();
  // console.log("deleted booking : ",deletedBooking);



  // get ping
  let getping = await request.get(
    "https://restful-booker.herokuapp.com/ping"
  );
  expect(getping.status()).toBe(201);

let pingResponse = await getping.text(); // NOT json()
console.log("ping response : ", pingResponse);
expect(pingResponse).toBe("Created");
});
