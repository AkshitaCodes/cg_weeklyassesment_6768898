import { test } from '@playwright/test';
import fs from "fs";
import path from "path";

import HomePage from "../PageObjectModel/home.page";
import RegisterPage from "../PageObjectModel/register.page";
import SearchPage from "../PageObjectModel/search.page";
import ProductPage from "../PageObjectModel/product.page";
import EmailPage from "../PageObjectModel/email.page";
// import JewelryPage from "../PageObjectModel/jewelry.page";
import AddressPage from "../PageObjectModel/address.page";

let data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../utility/demowebshop.json"), "utf-8")
);

test('FULL INTEGRATED FLOW', async ({ page }) => {

  let home = new HomePage(page, data);
  let register = new RegisterPage(page);
  let search = new SearchPage(page);
  let product = new ProductPage(page);
  let email = new EmailPage(page);
  let address = new AddressPage(page);

  await home.loadPage();

  await home.goToRegister();
  await register.register();

  await search.searchProduct();
  await search.selectFirstProduct();
  await product.emailAFriend();
  await email.sendEmail();
  

  await home.goToAddress();
  await address.addAddress();

  

});