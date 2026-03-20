import { test, expect } from '@playwright/test';

test('Flipkart xpath validation', async ({ page }) => {

  test.setTimeout(60000);

  // 1️⃣ Launch Flipkart
  await page.goto('https://www.flipkart.com', { waitUntil: 'domcontentloaded' });

  // 2️⃣ Close login popup (important)
  const closeBtn = page.locator('//button[contains(text(),"✕")]');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }

  // 3️⃣ Search phones
  await page.fill('//input[@name="q"]', 'phones');
  await page.keyboard.press('Enter');

  // 4️⃣ Click Brand → Apple
  await page.waitForSelector('//div[text()="Apple"]');
  await page.click('//div[text()="Apple"]');

  // 5️⃣ Wait for results to load
  await page.waitForLoadState('networkidle');

  // 6️⃣ Fetch price of 3rd product
  const thirdPrice = await page
    .locator('(//div[@class="_30jeq3 _1_WHN1"])[3]')
    .textContent();

  console.log("Price of 3rd Apple phone:", thirdPrice);

  expect(thirdPrice).not.toBeNull();

});