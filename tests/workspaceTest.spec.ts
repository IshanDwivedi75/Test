import { test } from '@playwright/test';

test('test', async ({ page }) => {
  // page is signed in.
});

test('test', async ({ page }) => {
  await page.getByRole('paragraph').filter({ hasText: 'My Workspace' }).click();
  await page.locator('[id="headlessui-menu-button-\\:r3\\:"]').click();
  await page.getByRole('menuitem', { name: 'View profile' }).click();
  await page.getByText('Upload your photo').click();
  await page.getByLabel('Upload your photo').setInputFiles('jedi.jpeg');
  await page.locator('.cropper-face').click();
  await page.locator('button[name="save"]').click();
  await page.getByPlaceholder('Your display name').click();
  await page.getByPlaceholder('Your display name').fill('ishan Dwivedi');
  await page.getByRole('button', { name: 'Save' }).click();
});