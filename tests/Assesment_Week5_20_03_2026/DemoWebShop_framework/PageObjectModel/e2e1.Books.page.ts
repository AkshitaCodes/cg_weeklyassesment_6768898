import { Page, Locator } from "@playwright/test";

class BooksPage {
  page: Page;
  sortDropdown: Locator;
  displayDropdown: Locator;
  firstProduct: Locator;

  constructor(page: Page) {
    this.page = page;

    this.sortDropdown = page.locator('#products-orderby');
    this.displayDropdown = page.locator('#products-pagesize');
    this.firstProduct = page.locator('.product-item h2 a').first();
  }

  async sortBy() {
    await this.sortDropdown.selectOption('Price: Low to High');
  }

  async changeDisplay() {
    await this.displayDropdown.selectOption('12');
  }

  async selectProduct() {
    await this.firstProduct.click();
  }
}

export default BooksPage;