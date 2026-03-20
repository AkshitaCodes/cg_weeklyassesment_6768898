import { Page, Locator } from "@playwright/test";

class SearchPage {
  page: Page;

  searchBox: Locator;
  advancedSearch: Locator;
  categoryLink: Locator;
  priceFrom: Locator;
  priceTo: Locator;
  searchBtn: Locator;
  firstProduct: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchBox = page.locator('.search-text').first();
    this.advancedSearch = page.locator('#As');
    this.categoryLink = page.locator('#Cid');
    this.priceFrom = page.locator('#Pf').first();
    this.priceTo = page.locator('#Pt').first();
    this.searchBtn = page.locator('.button-1.search-button').first();
    this.firstProduct = page.locator('.product-item h2 a').first();
  }

  async searchProduct(name: string) {
    await this.searchBox.fill(name);
  }

  async enableAdvancedSearch() {
    await this.advancedSearch.click();
  }

  async selectCategory(cat: string) {
    await this.categoryLink.selectOption({ label: cat });
  }

  async setPrice(from: string, to: string) {
    await this.priceFrom.fill(from);
    await this.priceTo.fill(to);
  }

  async clickSearchBtn() {
    await this.searchBtn.click();
  }

  async selectProduct() {
    await this.firstProduct.click();
  }
}

export default SearchPage;