import { Page, Locator } from "@playwright/test";

class ProductPage {
  page: Page;
  addToCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addToCartBtn = page.locator('input[id^="add-to-cart-button"]');
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }
}

export default ProductPage;