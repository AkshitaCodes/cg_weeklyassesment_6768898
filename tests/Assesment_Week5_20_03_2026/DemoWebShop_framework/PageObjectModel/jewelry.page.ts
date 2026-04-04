import { Page, Locator } from "@playwright/test";

class JewelryPage {
  page: Page;
  data: any;
  createJewelry: Locator;
  material: Locator;
  length: Locator;
  addToCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.data = data;
    this.createJewelry = page.locator('//a[contains(text(),"Create Your Own Jewelry")]');
    this.material = page.locator('#product_attribute_71_9_15');
    this.length = page.locator('#product_attribute_71_9_16');
    this.addToCart = page.locator('.button-1.add-to-cart-button');
  }

  async goToCreateJewelry() {
    await this.createJewelry.click();
  }
  async customizeJewelry() {
    await this.material.selectOption({ label: 'Gold (1 mm)' });
  }
  async lengthJewelry() {
    await this.length.fill('10');
  }
  async addToCartJewelry() {
    await this.addToCart.click();
  }
}

export default JewelryPage;