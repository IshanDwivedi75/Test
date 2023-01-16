import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('eat');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('game');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('code');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('sleep');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('repeat');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).first().check();
  await page.getByRole('listitem').filter({ hasText: 'game' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('listitem').filter({ hasText: 'code' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('listitem').filter({ hasText: 'sleep' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('listitem').filter({ hasText: 'repeat' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
});