import { Page, Locator } from "@playwright/test";

class CartPage {
  page: Page;
  shoppingCartLink: Locator;
  termsCheckbox: Locator;
  checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.shoppingCartLink = page.locator('.cart-label').first();
    this.termsCheckbox = page.locator('#termsofservice');
    this.checkoutBtn = page.getByRole('button', { name: 'Checkout' });
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }

  async acceptTerms() {
    await this.termsCheckbox.check();
  }

  async checkout() {
    await this.checkoutBtn.click();
  }
}

export default CartPage;