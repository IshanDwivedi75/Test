import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://app.oslash.com/login');
  await page.getByPlaceholder('name@email.com').click();
  await page.getByPlaceholder('name@email.com').fill('dwivediishan75@gmail.com');
  await page.getByRole('button', { name: 'Send' }).click();
});