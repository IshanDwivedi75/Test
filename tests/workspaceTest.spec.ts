import { test, expect } from '@playwright/test';
import Mailosaur from 'mailosaur'


test('test', async ({ page }) => {
  await page.goto('https://app.oslash.com/signup/onboarding');
  await page.getByPlaceholder('Your workspace name').click();
  await page.getByPlaceholder('Your workspace name').fill('Chain-Saw');
  await page.getByPlaceholder('Your company name').click();
  await page.getByPlaceholder('Your company name').fill('Oslash');
  await page.getByRole('radio', { name: 'Self Employed' }).click();
  await page.getByRole('button', { name: 'Start 15-day Free Trial' }).click();
  await page.getByRole('link', { name: 'Settings & Members' }).click();
  await page.getByText('Set Workspace Icon').click();
  await page.getByLabel('Set Workspace Icon').setInputFiles('jedi.jpeg');
  await page.locator('button[name="save"]').click();
  await page.getByRole('button', { name: 'Save' }).click();
});