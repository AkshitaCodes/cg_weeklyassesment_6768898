import { test } from '@playwright/test';
import path from "path";
import fs from "fs";

import HomePage from "../PageObjectModel/e2e1.Home.page";
import BooksPage from "../PageObjectModel/e2e1.Books.page";
import ProductPage from "../PageObjectModel/e2e1.Product.page";
import CartPage from "../PageObjectModel/e2e1.Cart.page";

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../utility/demowebshop.json"), "utf-8")
);

test('Books → Cart → Checkout Flow', async ({ page }) => {

  const home = new HomePage(page, data);
  const books = new BooksPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await home.loadPage();
  await home.goToBooks();

  await books.sortBy();
  await books.changeDisplay();
  await books.selectProduct();

  await product.addToCart();

  await cart.goToCart();
  await cart.acceptTerms();
  await cart.checkout();

});