const playwright = require('playwright');
const assert = require('chai').assert;
const Mailosaur = require('mailosaur');

(async () => {
  const apiKey = 'EtxwAfP5G3GN2RE2';
  const mailosaur = new Mailosaur(apiKey);

  const serverId = '0njdz63p';
  const serverDomain = 'fresh-five@0njdz63p.mailosaur.net';

  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
    

  await page.goto('https://auth.oslash.com/passwordless/wl8wTn896ogMzUxYqv1HE5jqs/confirm');
  await page.goto('https://app.oslash.com/auth/callback/passwordless?loginMethod=email&platform=Chrome&code=01GPZVBRC017C3BH3NY0900DSH');
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
  await browser.close();
})
();