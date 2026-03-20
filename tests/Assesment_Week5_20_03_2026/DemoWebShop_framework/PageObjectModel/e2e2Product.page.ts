import { Page, Locator } from "@playwright/test";

class ProductPage {
  page: Page;
  compareBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.compareBtn = page.locator('.button-2.add-to-compare-list-button');
  }

  async addToCompare() {
    await this.compareBtn.click();
  }

  
  async goToComparePage() {
  await this.page.goto('https://demowebshop.tricentis.com/compareproducts');
}
}

export default ProductPage;