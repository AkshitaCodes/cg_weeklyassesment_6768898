import { test, expect } from '@playwright/test';

test('Validate xpath on demo qspiders app', async ({ page }) => {

  test.setTimeout(60000);

  // 1️⃣ Launch the URL
  await page.goto('https://demoapps.qspiders.com/ui/register', { waitUntil: 'domcontentloaded' });

  // 2️⃣ Fill Username
  await page.fill('//input[@id="name"]', 'Akshita');

  // 3️⃣ Fill Email
  await page.fill('//input[@id="email"]', 'akshita123@gmail.com');

  // 4️⃣ Fill Password
  await page.fill('//input[@id="password"]', 'Akshita@123');

  // 5️⃣ Click Register
  await page.click('//button[text()="Register"]');

  // 6️⃣ Wait for navigation to login page
  await page.waitForURL('**/login');

  // 7️⃣ Fill Email
  await page.fill('//input[@id="email"]', 'akshita123@gmail.com');

  // 8️⃣ Fill Password
  await page.fill('//input[@id="password"]', 'Akshita@123');

  // 9️⃣ Click Login
  await page.click('//button[text()="Login"]');

});