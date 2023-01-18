import { test, expect, devices } from '@playwright/test';
import Mailosaur from 'mailosaur';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

test('test', async ({ page }) => {

await page.goto('https://app.oslash.com/login');

const apiKey = 'Jhik6KsBOIQMCxmc';

const Mailosaur = require('mailosaur');
const mailosaur = new Mailosaur(apiKey);

const serverId = '0njdz63p';
const serverDomain = '0njdz63p.mailosaur.net';

const randomString = new Date().getTime();
const testEmail = `${randomString}@${serverDomain}`

await page.goto('https://app.oslash.com/login');

await page.getByPlaceholder('name@email.com').click();

await page.getByPlaceholder('name@email.com').fill(testEmail);

await page.click('text=Send');

const searchCriteria = {
    sentTo: testEmail
}

const message = await mailosaur.messages.get(serverId, searchCriteria)
console.log(message.subject);
console.log(message.html.links.length) // 2

const firstLink = message.html.links[0]
console.log(firstLink.text) 
console.log(firstLink.href) 
await page.goto(firstLink.href)
const email = await mailosaur.messages.get(serverId, {
    sentTo: testEmail
  });


  //await page.goto('https://auth.oslash.com/passwordless/r1OxPAXhW27jhNLEsUWgBrI9v/confirm');
  //await page.goto('https://app.oslash.com/auth/callback/passwordless?loginMethod=email&platform=Chrome&code=01GQ2138T3A8SDBPZKB9A1804F');
  await page.goto('https://app.oslash.com/signup/onboarding');
  await page.getByPlaceholder('Your workspace name').click();
  await page.getByPlaceholder('Your workspace name').fill('SpacedOut');
  await page.getByPlaceholder('Your company name').click();
  await page.getByPlaceholder('Your company name').fill('Oslash');
  await page.getByRole('radio', { name: 'Self Employed' }).click();
  await page.getByRole('button', { name: 'Start 15-day Free Trial' }).click();

    
     // assert.equal(email.subject, 'Test Done');

});