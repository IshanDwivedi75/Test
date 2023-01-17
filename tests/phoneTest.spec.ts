import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByText('PlaywrightDocsAPINode.jsNode.jsPythonJava.NETCommunity').click();
  await page.getByRole('heading', { name: 'Playwright enables reliable end-to-end testing for modern web apps.' }).click();
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await page.getByRole('button', { name: 'Toggle navigation bar' }).click();
  await page.getByRole('button', { name: 'Close navigation bar' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search docs').fill('test gen');
  await page.locator('#docsearch-item-0').getByRole('link', { name: 'Test Generator' }).click();
  await page.getByText('When you have finished interacting with the page, press the record button to sto').click();
});