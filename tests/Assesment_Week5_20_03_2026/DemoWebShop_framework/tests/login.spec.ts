import { test } from '@playwright/test';
import path from "path";
import fs from "fs";

import HomePage from "../PageObjectModel/home.page";
import LoginPage from "../PageObjectModel/login.page"; // fixed import

const jsonData = fs.readFileSync(
  path.join(__dirname, "../utility/data.json"),
  "utf-8"
);
const data = JSON.parse(jsonData);

test('Login Flow', async ({ page }) => {

  const home = new HomePage(page, data);
  const login = new LoginPage(page);

  await home.loadPage();
  await home.goToLogin();

  // Pass username and password from JSON
  await login.login(data.username, data.password);
});