import { Page, Locator } from "@playwright/test";

class HomePage {
  page: Page;
  data: any;
  searchLink: Locator;

  constructor(page: Page, data: any) {
    this.page = page;
    this.data = data;

    this.searchLink = page.locator('//a[contains(text(),"Search")]').first();
  }

  async loadPage() {
    await this.page.goto(this.data.url);
  }

  async goToSearch() {
    await this.searchLink.click();
  }
}

export default HomePage;