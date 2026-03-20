import { test, expect } from '@playwright/test';

test('Tokyo Olympics Emma McKeon Gold medals', async ({ page }) => {

  // Open Google
  await page.goto('https://www.google.com');

  // Search Tokyo Olympics
  await page.fill('textarea[name="q"]', 'Tokyo Olympics');
  await page.keyboard.press('Enter');

  // Open first result
  await page.locator('(//h3)[1]').click();

  // Scroll to Featured Athletes
  await page.locator("text=Featured Athletes").scrollIntoViewIfNeeded();

  // Click All Athletes
  await page.getByText('All Athletes').click();

  // Fetch gold medal count
  const goldMedals = await page.locator("//span[text()='Emma McKeon']/ancestor::tr//td[2]").textContent();

  console.log("Emma McKeon Gold Medals:", goldMedals);

});