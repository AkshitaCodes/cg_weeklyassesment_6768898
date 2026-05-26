import {Page, expect, Locator} from '@playwright/test'
import BasePage from './base.page'

export default class LoginPage extends BasePage {
    page: Page;
    hotel: Locator;
    destination: Locator
    checkIn: Locator;
    checkOut: Locator
    room: Locator;
    searchbtn: Locator;
    newpopup: Locator;
    searchWithLocality: Locator;
    selectProperty: Locator;
    reserve: Locator;
    details: Locator;
    firstName: Locator;
    lastName: Locator;
    email: Locator;
    mobile: Locator;

    
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.hotel = page.getByText('Hotels').nth(1);
        this.destination = page.getByPlaceholder('Enter city, area or property name');
        this.checkIn = page.locator('.body-xs.text-secondary').nth(1);
        this.checkOut = page.locator('.body-xs.text-secondary').nth(2);
        this.room = page.locator('.body-xs.text-secondary').nth(3);
        this.searchbtn = page.getByRole('button', { name: 'Search' });
        this.newpopup = page.locator('div.absolute.cursor-pointer >> id=848, svg');
        this.searchWithLocality = page.getByPlaceholder('Enter area, locality or hotel');
        this.selectProperty = page.locator('.flex.flex-1.flex-col.gap-15.rounded-b-20').nth(0);
        this.reserve = page.locator('.flex.gap-15').nth(2);
        this.details = page.getByRole('radio', { name: 'Miss.' })
        this.firstName = page.locator('#firstName-input');
        this.lastName = page.locator('#lastName-input');
        this.email = page.locator('#email-input');
        this.mobile = page.locator('#mobile-input');
    }    

    async clickHotel() {
        await this.hotel.click();
    }

    async enterDestination(destinationForHotel: string) {
      await this.destination.click();
      await this.destination.fill(destinationForHotel);
      await this.page.locator('.flex.border-l.border-neutral-100').nth(0).click();
    }

    async selectCheckInDate(month: string, day: string) {
    await this.checkIn.click();
    // Dynamically builds the regex based on what you pass (e.g., /May 22,/i)
    await this.page.getByRole('button', { name: new RegExp(`${month} ${day},`, 'i') }).click();
    }

    async selectCheckOutDate(month1: string, day1: string) {
    await this.checkOut.click();
    // Works perfectly even if checkout spills over into June! (e.g., /June 2,/i)
    await this.page.getByRole('button', { name: new RegExp(`${month1} ${day1},`, 'i') }).click(); 
  }

    async selectRoom(room: string) {
        await this.room.click();
        await this.page.locator(`.body-lg`).nth(8)
        .click();
    }

    async clickSearch() {
        await this.searchbtn.click();
    }

    async closenewPopup() {
        await this.newpopup.click();
    }

    async searchWithinLocality(locality: string) {
        await this.searchWithLocality.click();
        await this.searchWithLocality.fill(locality);
        await this.page.locator('.min-w-0.flex-1.overflow-hidden').nth(0).click();
    }

    async selectPropertyfromList() {
        await this.selectProperty.click();
    }

    async clickReserve() {
        await this.reserve.click();
    }
    async enterDetails() {
        await this.details.check();
    }
    async enterFirstName(firstName: string) {
        await this.firstName.fill(firstName);
    }
    async enterLastName(lastName: string) { 
        await this.lastName.fill(lastName);
    }
    async enterEmail(email: string) {
        await this.email.fill(email);
    }
    async enterMobile(mobile: string) {
        await this.mobile.fill(mobile);
    }
}