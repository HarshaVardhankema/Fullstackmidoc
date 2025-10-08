import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('samsungs24ultra');
  await page.goto('https://www.youtube.com/');
  await expect(page.getByRole('combobox', { name: 'Search' })).toBeEmpty();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('samsung');
  await page.getByRole('button', { name: 'samsung s25 ultra' }).click();
  await page.locator('a').filter({ hasText: ':55 11:55 Now playing' }).click();
});