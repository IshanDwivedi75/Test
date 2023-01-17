import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.getByRole('button', { name: 'workspacesidenavbaritem' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('eh');
  await page.getByPlaceholder('Search').press('Enter');
  await page.getByRole('button', { name: 'clear' }).click();
  await page.getByRole('link', { name: 'Settings & Members' }).click();
  await page.getByPlaceholder('Your team or company name').click();
  await page.getByPlaceholder('Your team or company name').click();
  await page.getByText('Set Workspace Icon').click();
  await page.getByLabel('Set Workspace Icon').setInputFiles('jedi.jpeg');
  await page.locator('button[name="save"]').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Workspace settings updated successfully').click();
});