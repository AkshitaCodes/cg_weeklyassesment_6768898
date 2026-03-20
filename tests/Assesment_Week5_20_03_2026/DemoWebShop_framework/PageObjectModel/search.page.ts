import { Page, Locator } from "@playwright/test";

class SearchPage {
  page: Page;
  searchbar: Locator;
  searchBtn: Locator;
  firstProduct: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchbar = page.locator('.search-box-text');
    this.searchBtn= page.locator('.button-1.search-box-button')
    this.firstProduct = page.locator('.product-item h2 a').first();
  }

  async searchProduct() {
    await this.searchbar.type('Ring');
    await this.searchBtn.click();
    await this.page.waitForLoadState('networkidle');
  }
  async selectFirstProduct() {
    await this.firstProduct.waitFor({ state: 'visible' });
    await this.firstProduct.click();
  }
}

export default SearchPage;