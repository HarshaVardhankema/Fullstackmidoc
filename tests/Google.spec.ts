import { test, expect } from '@playwright/test';

test('Google search test', async ({ page }) => {
  // Step 1: Open browser in full screen
  await page.keyboard.press('F11');

  // Step 2: Navigate to Google
  await page.goto('https://www.google.com/');

  // Step 3: Fill search box with "Playwright"
  const searchBox = page.locator("[name='q']");
  await searchBox.fill("Playwright");

  // Step 4: Get and print the current value in the search box
  const enteredText = await searchBox.inputValue();
  console.log( enteredText);

  // Step 5: Press Enter to search
  await searchBox.press('Enter');

  // Step 6: Verify results page title
  await expect(page).toHaveTitle(/Playwright/i);
});
