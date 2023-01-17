import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
 await page.goto('https://auth.oslash.com/passwordless/HEeiKXHXn0WDJBi8wA4gmL0Xr/confirm');
 await page.goto('https://app.oslash.com/auth/callback/passwordless?loginMethod=email&platform=Chrome&code=01GPZJ3F78HAP2WMH81Q6JNT5X');
 await page.goto('https://app.oslash.com/login/install?platform=Chrome');
 await page.goto('https://app.oslash.com/org?platform=Chrome');
 await page.goto('https://app.oslash.com/shortcuts/all');
 await page.getByRole('menuitem', { name: 'View profile' }).click();
 await page.getByPlaceholder('Your display name').click();
 await page.getByText('Upload your photo').click();
 await page.getByLabel('Upload your photo').setInputFiles('jedi.jpeg');
 await page.locator('.cropper-face').click();
 await page.locator('button[name="save"]').click();
 await page.getByRole('button', { name: 'Save' }).click();
});
