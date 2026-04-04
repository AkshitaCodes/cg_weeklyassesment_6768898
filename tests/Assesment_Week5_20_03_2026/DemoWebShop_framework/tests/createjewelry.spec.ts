import {test} from '@playwright/test';
import path from "path";
import fs from "fs";
import JewelryPage from "../PageObjectModel/jewelry.page";

let data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../utility/demowebshop.json"), "utf-8")
);

test('Create Jewelry Flow', async ({ page }) => { 

  let jewelry = new JewelryPage(page);  

  // await jewelry.loadPage();
  await jewelry.goToCreateJewelry();
  await jewelry.customizeJewelry();
  await jewelry.lengthJewelry();
  await jewelry.addToCartJewelry();
}); 