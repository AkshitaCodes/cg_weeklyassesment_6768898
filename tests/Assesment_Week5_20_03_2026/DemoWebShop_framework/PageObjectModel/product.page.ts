import { Page, Locator } from "@playwright/test";

class ProductPage {
  page: Page;
  // quantity: Locator;
  addToCart: Locator;
  emailFriend: Locator;

  constructor(page: Page) {
    this.page = page;

    // this.quantity = page.locator('.qty-input');
    this.addToCart = page.locator('#product-details-form input[id^="add-to-cart-button"]');
    this.emailFriend = page.locator('.button-2.email-a-friend-button');
  }

  // async setQuantity() {
  //   await this.quantity.fill('2');
  // }

  async addProductToCart() {
    await this.addToCart.click();
  }

  async emailAFriend() {
    await this.emailFriend.click();
  }
}

export default ProductPage;