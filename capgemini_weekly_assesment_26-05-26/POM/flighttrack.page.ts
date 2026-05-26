import {Page, expect, Locator} from '@playwright/test'
import BasePage from './base.page'
export default class FlightTrackPage extends BasePage{
  page: Page
  flighttrack: Locator
  airline: Locator
  planenumber: Locator
  whentotrack: Locator
  constructor(page: Page) {
    // Call parent constructor
    super(page);
    this.page = page
    
    this.flighttrack = page.locator('.relative.flex.justify-center.flex-col.items-center').first();
    this.airline = page.locator('[data-testid="airline-code"]').first();
    this.planenumber = page.getByPlaceholder('Flight Number')
    this.whentotrack = page.locator('[data-testid="date-selector-Tomorrow"]')
  }
  async gotoFlightTrack() {
    await this.flighttrack.click();
  }
  async fillAirline() {
    await this.airline.click();
    await this.page.locator('.flex.items-center.mx-15.py-15.gap-10.border-b').nth(2).click();
  }
  async fillFlightNumber() {
    await this.planenumber.click();
    await this.planenumber.fill('2712');
  }
  async whenToTrack() {
    await this.whentotrack.click();
  }
}
