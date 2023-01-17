//global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://auth.oslash.com/passwordless/gKalb7KPcnyJ8MXSxLWAaTgDp/confirm');
    await page.goto('https://app.oslash.com/auth/callback/passwordless?loginMethod=email&platform=Chrome&code=01GPZEQ2Y2V842D6GW70529MDD');
    await page.goto('https://app.oslash.com/login/install?platform=Chrome');
    await page.goto('https://app.oslash.com/org?platform=Chrome');
    await page.goto('https://app.oslash.com/shortcuts/all');
    // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;

