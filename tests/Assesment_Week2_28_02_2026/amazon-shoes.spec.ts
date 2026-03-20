import { test, expect } from '@playwright/test';

test('Amazon Shoes - Fetch 4th Product Name and Price', async ({ page }) => {

  // 1️⃣ Launch Amazon
  await page.goto('https://www.amazon.in');

  // 2️⃣ Search for shoes
  await page.fill("//input[@id='twotabsearchtextbox']", "shoes");
  await page.keyboard.press("Enter");

  // Wait for results
  await page.waitForSelector("//div[@data-component-type='s-search-result']");

  // 3️⃣ Select "Get It by Tomorrow" filter
  await page.locator("//span[contains(text(),'Get It by Tomorrow')]").click();

  // Wait for filtered results
  await page.waitForTimeout(3000);

  // 4️⃣ Fetch 4th product name
  const fourthProductName = await page.locator(
    "(//div[@data-component-type='s-search-result']//h2/span)[4]"
  ).textContent();

  // Fetch 4th product price
  const fourthProductPrice = await page.locator(
    "(//div[@data-component-type='s-search-result']//span[@class='a-price-whole'])[4]"
  ).textContent();

  console.log("4th Product Name:", fourthProductName);
  console.log("4th Product Price:", fourthProductPrice);

});