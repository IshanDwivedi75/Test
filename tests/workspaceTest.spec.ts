import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://auth.oslash.com/passwordless/G1xgVB4o028csQQeRZfrQRBNu/confirm');
  await page.goto('https://app.oslash.com/auth/callback/passwordless?loginMethod=email&platform=Chrome&code=01GPZS4RY2V1DX4SVQQVCJFM3K');
  await page.goto('https://app.oslash.com/signup/onboarding');
  await page.getByPlaceholder('Your workspace name').click();
  await page.getByPlaceholder('Your workspace name').fill('Chain-Saw');
  await page.getByPlaceholder('Your company name').click();
  await page.getByPlaceholder('Your company name').fill('Warzone');
  await page.getByRole('radio', { name: 'Self Employed' }).click();
  await page.getByRole('button', { name: 'Start 15-day Free Trial' }).click();
  await page.locator('[id="headlessui-menu-button-\\:ru\\:"]').click();
  await page.getByRole('menuitem', { name: 'View profile' }).click();
  await page.getByText('Upload your photo').click();
  await page.getByLabel('Upload your photo').setInputFiles('jedi.jpeg');
  await page.locator('button[name="save"]').click();
  await page.getByPlaceholder('Your display name').click();
  await page.getByPlaceholder('Your display name').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Profile updated successfully').click();
  await page.getByRole('link', { name: 'Settings & Members' }).click();
  await page.getByLabel('Set Workspace Icon').setInputFiles('jedi.jpeg');
  await page.locator('button[name="save"]').click();
  await page.getByRole('button', { name: 'Save' }).click();
});