import { Page, Locator } from "@playwright/test";

class JewelryPage {
  page: Page;
  material: Locator;
  length: Locator;
  addToCart: Locator;

  constructor(page: Page) {
    this.page = page;

    this.material = page.locator('#product_attribute_71_9_15');
    this.length = page.locator('#product_attribute_71_9_16');
    this.addToCart = page.locator('.button-1.add-to-cart-button');
  }

  async customizeJewelry() {
    await this.material.selectOption({ label: 'Gold (1 mm)' });
    await this.length.selectOption({ label: '30 cm' });
    await this.addToCart.click();
  }
}

export default JewelryPage;