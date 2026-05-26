import {test} from '@playwright/test'
import path from 'path'
import fs from 'fs'

import LoginPage from '../POM/login.page'
import FlightTrackPage from '../POM/flighttrack.page'
import FlightPage from '../POM/flight.page'
import HotelPage from '../POM/hotel.page'
const dataPath = path.join(__dirname, '../utility/data.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

test ('End to End',async ({page}) => {
  let loginPage = new LoginPage(page)
  await loginPage.goto(data.url)
  await loginPage.closePopup()
  await loginPage.login(data);
  await loginPage.enterMobileNumber(data.mobile)
  await loginPage.clickContinue()

  await page.pause()    
  let flighttrackPage = new FlightTrackPage(page) 
  await flighttrackPage.gotoFlightTrack();
  await flighttrackPage.fillAirline();
  await flighttrackPage.fillFlightNumber();
  await page.keyboard.press('Enter');

  let flightPage = new FlightPage(page)
      await flightPage.goto(data.url)
      await flightPage.closePopup()
      await flightPage.clickFlight();
      await flightPage.fromCity(data.from);
      await flightPage.toCity(data.to);
      await flightPage.clickSearch();
      await flightPage.clickSelectFlight();
      await flightPage.clickBookFlight();

      let hotelPage = new HotelPage(page)
          await hotelPage.goto(data.url)
          await hotelPage.closePopup()
          await hotelPage.clickHotel();
          await hotelPage.enterDestination(data.destinationForHotel);
          await hotelPage.selectCheckInDate(data.month, data.day); 
          await hotelPage.selectCheckOutDate(data.month1, data.day1);
          await hotelPage.selectRoom('2 Rooms, 2 Guests');
          await hotelPage.clickSearch();
          await page.pause();
          await hotelPage.searchWithinLocality(data.locality);
          await hotelPage.selectPropertyfromList();
          await hotelPage.clickReserve();
})