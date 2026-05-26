import {Page, expect, Locator} from '@playwright/test'
import BasePage from './base.page'
export default class FlightPage extends BasePage{
  // page elements for flight
  page: Page;
  flight: Locator
  from: Locator
  to: Locator
  date: Locator
  return: Locator
  trvellersAndClass: Locator
  searchbtn: Locator
  filter: Locator
  selectFlight: Locator
  bookFlight: Locator;
    constructor(page: Page) {
    // Call parent constructor
    super(page);
    this.page = page;

    this.flight = page.locator('.font-medium.flex.items-center.gap-5.cursor-pointer').nth(4)    // targeting 5th index
    this.from = page.locator('.flex-1.h-full.flex.flex-col.justify-center.px-15.py-10 ').nth(0);    // targeting 1st index
    this.to = page.locator('.flex-1.h-full.flex.flex-col.justify-center.px-15.py-10 ').nth(1);      // targeting 2nd index
    this.date = page.locator('.flex-1.h-full.flex.flex-col.justify-center.px-15.py-10 ').nth(2);    // targeting 3rd index
    this.return = page.locator('.flex-1.h-full.flex.flex-col.justify-center.px-15.py-10 ').nth(3);  // targeting 4th index
    this.trvellersAndClass = page.locator('.flex-1.h-full.flex.flex-col.justify-center.px-15.py-10 ').nth(4);   // targeting 5th index
    this.searchbtn = page.getByRole('button', { name: 'Search' });    // search button
    this.filter = page.locator('input[value="selectAll"]').first();   // filter
    this.selectFlight = page.locator('.flex.items-start.w-full').nth(0);   // select flight
    this.bookFlight = page.getByRole('button', { name: 'Book' }).last();   // book flight
  }

  
  async clickFlight() {
    await this.flight.click();
  }
  async fromCity(city: string) {
    await this.from.click();
    await this.from.pressSequentially(city);  // Use pressSequentially to simulate real human typing so that it can triggers dropdown properly
    await this.page.getByRole('listitem').filter({ hasText: new RegExp(city, 'i') }).first().click();   // Wait for the autocomplete dropdown to pop up, find our city, and click it

  }
  async toCity(city1: string) {
    //Don't click here. If the "From" box is still closing, the click gets lost. Just start typing and it'll open right up.
    await this.to.pressSequentially(city1);
    await this.page.getByRole('listitem').filter({ hasText: new RegExp(city1, 'i') }).first().click();

  }
  async selectDate(day: string) {
    // Opens the calendar and picks our date
    await this.date.click();
    await this.page.getByRole('button', { name: new RegExp(day, 'i') }).click();
  }

  async selectReturnDate(day1: string) {
    // Opens the calendar and picks our return date
    await this.return.click();
    await this.page.getByRole('button', { name: new RegExp(day1, 'i') }).click();
  }
  async selectTravellersAndClass() {
    // Opens the passenger popup, adds travellers, and saves
    await this.trvellersAndClass.click();
    await this.page.locator('.px-5px').nth(5).click();    // Click the specific "+" counter button inside the popup
    await this.page.getByRole('button', { name: "Done" }).click();   // Confirm the selection to close the popup

  }
  async clickSearch() {
    // Clicks the search button to submit the parameters to find flights
    await this.searchbtn.click();
  }
  async clickFilter() {
    // Force-clicking ensures it gets ticked
    await this.filter.click({ force: true });
  }
  async clickSelectFlight() {
    // Clicks the top flight from the search results
    await this.selectFlight.click();
  }
  async clickBookFlight() {
    // Clicks the final checkout button
    await this.bookFlight.click();
  }
}


