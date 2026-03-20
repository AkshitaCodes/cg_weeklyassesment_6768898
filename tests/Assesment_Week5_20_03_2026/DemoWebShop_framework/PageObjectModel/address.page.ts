import { Page, Locator } from "@playwright/test";

class AddressPage {
  page: Page;
  addNew: Locator;
  firstname: Locator;
  lastname: Locator;
  email: Locator;
  company: Locator;
  country: Locator;
  city: Locator;
  address: Locator;
  postcode: Locator;
  phone: Locator;
  saveBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    // this.addNew = page.locator('.button-1.add-new-address-button');
    this.addNew = page.getByRole('button', { name: 'Add new' });
    this.firstname = page.locator('#Address_FirstName');
    this.lastname = page.locator('#Address_LastName');  
    this.email = page.locator('#Address_Email');
    this.company = page.locator('#Address_Company');
    this.country = page.locator('#Address_CountryId');
    this.city = page.locator('#Address_City');
    this.address = page.locator('#Address_Address1');
    this.postcode = page.locator('#Address_ZipPostalCode');
    this.phone = page.locator('#Address_PhoneNumber');
    this.saveBtn = page.locator('.button-1.save-address-button');
  }

  async addAddress() {
    // await this.addNew.click();
    await this.addNew.waitFor({ state: 'visible' });
    await this.addNew.click();

    await this.firstname.fill("Akshita");
    await this.lastname.fill("Jain");
    await this.email.fill(`test${Date.now()}@mail.com`);
    await this.company.fill("Trenaxa");
    await this.country.selectOption({ label: 'India' });
    await this.city.fill("Mumbai");
    await this.address.fill("Mumbai");
    await this.postcode.fill("400001");
    await this.phone.fill("1234567890");
    await this.saveBtn.click();
  }
}

export default AddressPage;