import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://auth.oslash.com/passwordless/G09wdjoYqEiFOwRdsnPfWDlMS/confirm');
  await page.goto('https://app.oslash.com/auth/callback/passwordless?loginMethod=email&platform=Chrome&code=01GPZA4NWXRJR9J11FXT16N35M');
  await page.goto('https://app.oslash.com/login/install?platform=Chrome');
  await page.goto('https://app.oslash.com/org?platform=Chrome');
  await page.goto('https://app.oslash.com/shortcuts/all');
});

test('first', async ({ page }) => {
    await page.goto('https://auth.oslash.com/passwordless/G09wdjoYqEiFOwRdsnPfWDlMS/confirm');
    await page.goto('https://app.oslash.com/auth/callback/passwordless?loginMethod=email&platform=Chrome&code=01GPZA4NWXRJR9J11FXT16N35M');
    await page.goto('https://app.oslash.com/login/install?platform=Chrome');
    await page.goto('https://app.oslash.com/org?platform=Chrome');
    await page.goto('https://app.oslash.com/shortcuts/all'); // page is signed in.
  });
  
  test('second', async ({ page }) => {
    await page.goto('https://auth.oslash.com/passwordless/G09wdjoYqEiFOwRdsnPfWDlMS/confirm');
  await page.goto('https://app.oslash.com/auth/callback/passwordless?loginMethod=email&platform=Chrome&code=01GPZA4NWXRJR9J11FXT16N35M');
  await page.goto('https://app.oslash.com/login/install?platform=Chrome');
  await page.goto('https://app.oslash.com/org?platform=Chrome');
  await page.goto('https://app.oslash.com/shortcuts/all');// page is signed in.
  });