import { Page, Locator } from "@playwright/test";

class ComparePage {
  page: Page;
  removeBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.removeBtn = page.locator('.button-2.remove-button').first();
  }

  async removeProduct() {
    await this.removeBtn.click();
  }
}

export default ComparePage;