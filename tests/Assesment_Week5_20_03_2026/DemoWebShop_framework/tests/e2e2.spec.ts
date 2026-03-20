import { test } from '@playwright/test';
import path from "path";
import fs from "fs";

import HomePage from "../PageObjectModel/e2e2Home.page";
import SearchPage from "../PageObjectModel/e2e2Search.page";
import ProductPage from "../PageObjectModel/e2e2Product.page";
import ComparePage from "../PageObjectModel/e2e2Compare.page";

const jsonData = fs.readFileSync(
  path.join(__dirname, "../utility/demowebshop.json"),
  "utf-8"
);
const data = JSON.parse(jsonData);

test('Demo Web Shop E2E Flow 2nd', async ({ page }) => {

  const home = new HomePage(page, data);
  const search = new SearchPage(page);
  const product = new ProductPage(page);
  const compare = new ComparePage(page);

  await home.loadPage();
  await home.goToSearch();

  await search.searchProduct('Ring');
  await search.enableAdvancedSearch();
  await search.selectCategory('Jewelry');
  await search.setPrice('1000', '3000');
  await search.clickSearchBtn();

  await search.selectProduct();
  await product.addToCompare();

  await product.goToComparePage();
  await compare.removeProduct();

});