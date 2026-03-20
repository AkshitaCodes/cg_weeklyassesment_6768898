import { Page, Locator } from "@playwright/test";

class HomePage {
  page: Page;
  data: any;
  booksLink: Locator;

  constructor(page: Page, data: any) {
    this.page = page;
    this.data = data;

    this.booksLink = page.locator('a', { hasText: 'Books' }).first();
  }

  async loadPage() {
    await this.page.goto(this.data.url);
  }

  async goToBooks() {
    await this.booksLink.click();
  }
}

export default HomePage;