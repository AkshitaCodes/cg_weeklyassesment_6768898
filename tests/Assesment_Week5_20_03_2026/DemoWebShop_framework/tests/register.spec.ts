import { test } from '@playwright/test';
import path from "path";
import fs from "fs";

import HomePage from "../PageObjectModel/home.page";
import RegisterPage from "../PageObjectModel/register.page";

const jsonData = fs.readFileSync(
  path.join(__dirname, "../utility/demowebshop.json"),
  "utf-8"
);
const data = JSON.parse(jsonData);

test('Register Flow', async ({ page }) => {

  const home = new HomePage(page, data);
  const register = new RegisterPage(page);

  await home.loadPage();
  await home.goToRegister();
  await register.register();
});