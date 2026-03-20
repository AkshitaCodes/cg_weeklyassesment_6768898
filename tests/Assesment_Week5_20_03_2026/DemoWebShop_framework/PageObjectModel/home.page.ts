import { Page, Locator } from "@playwright/test";

class HomePage {
  page: Page;
  data: any;
  registerLink: Locator;
  homeIcon: Locator;
  // createJewelry: Locator;
  addressLink: Locator;
  popularTag: Locator;
  loginLink: Locator;

  constructor(page: Page, data: any) {
    this.page = page;
    this.data = data;

    this.registerLink = page.locator('.ico-register');
    this.homeIcon = page.locator('//img[@alt="Tricentis Demo Web Shop"]');
    // this.createJewelry = page.locator('//a[contains(text(),"Create Your Own Jewelry")]');
    //  this.createJewelry = page.getByRole('link', { name: 'Create your own jewelry' });
    // this.addressLink = page.locator('//a[contains(text(),"Addresses")]');
    this.addressLink = this.page.locator('a[href="/customer/addresses"]');
    this.popularTag = page.locator('//a[contains(text(),"Popular")]');
    this.loginLink = page.getByRole('link', { name: 'Log in' });
  }

  async loadPage() {
    await this.page.goto(this.data.url);
  }

  async goToRegister() {
    await this.registerLink.click();
  }
  async goToLogin() {   
    await this.loginLink.click();
  }

  async goHome() {
    await this.homeIcon
  }

//   async goToJewelry() {
//   await this.createJewelry.click();
// // }
// async goToJewelry() {
//     await this.page.waitForLoadState('domcontentloaded');
//     await this.createJewelry.scrollIntoViewIfNeeded();
//     await this.createJewelry.click();
  // }


  async goToAddress() {
    await this.addressLink.click();
  }

//   async clickPopularTag() {
//     await this.popularTag.click();
//   }
}

export default HomePage;
