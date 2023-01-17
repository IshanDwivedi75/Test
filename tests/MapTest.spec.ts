import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/maps/@12.9883296,77.5908368,16.4z');
  await page.goto('https://www.google.com/maps/@12.9883296,77.5908368,16z');
  await page.goto('https://www.google.com/maps/place/Kumara+Krupa+Guest+House/@12.9883296,77.5908368,16z/data=!4m5!3m4!1s0x3bae174c5ce55711:0x2764d4304ff2fcdf!8m2!3d12.9910852!4d77.5824331');
  await page.goto('https://www.google.com/maps/place/Kumara+Krupa+Guest+House/@12.9883296,77.5908368,16z/data=!4m8!3m7!1s0x3bae174c5ce55711:0x2764d4304ff2fcdf!5m2!4m1!1i2!8m2!3d12.9910847!4d77.5824335');
  await page.goto('https://www.google.com/maps/place/Kumara+Krupa+Guest+House/@12.9910852,77.5780557,16z/data=!4m8!3m7!1s0x3bae174c5ce55711:0x2764d4304ff2fcdf!5m2!4m1!1i2!8m2!3d12.9910847!4d77.5824335');
  await page.goto('https://www.google.com/maps/@12.9910852,77.5780557,16z');
  await page.goto('https://www.google.com/maps/place/OSlash,+Landmark-+Reliance+Digital,+Cunningham+Road,+Vasanth+Nagar,+Bengaluru,+Karnataka/@12.9910852,77.5780557,16z/data=!4m5!3m4!1s0x3bae15078b0ddd33:0xf6c09729ecd7f12e!8m2!3d12.9888761!4d77.5929155');
  await page.goto('https://www.google.com/maps/place/OSlash/@12.9910852,77.5780557,16z/data=!4m5!3m4!1s0x3bae15078b0ddd33:0xf6c09729ecd7f12e!8m2!3d12.9888761!4d77.5929155');
  await page.goto('https://www.google.com/maps/place/OSlash/@12.9888761,77.5907268,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae15078b0ddd33:0xf6c09729ecd7f12e!8m2!3d12.9888761!4d77.5929155');
  await page.goto('https://accounts.google.com/v3/signin/identifier?dsh=S285911286%3A1673933470692900&continue=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FOSlash%2F%4012.9888761%2C77.5907268%2C17z%2Fdata%3D%213m1%214b1%214m5%213m4%211s0x3bae15078b0ddd33%3A0xf6c09729ecd7f12e%218m2%213d12.9888761%214d77.5929155%3Fsource%3Dsign_in_save_to_list&hl=en&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AeAAQh5achDI6yiCMmeonN6tvwhmb36f_m4CcqcmddmCEhgBdxPtoAa_zwoqKl1AtOEmbfB3wvrZLQ');
  await page.goto('https://www.google.com/maps/place/OSlash/@12.9888761,77.5907268,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae15078b0ddd33:0xf6c09729ecd7f12e!8m2!3d12.9888761!4d77.5929155');
  await page.goto('https://www.google.com/maps/place/OSlash/@12.9888761,77.5929155,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae15078b0ddd33:0xf6c09729ecd7f12e!8m2!3d12.9888761!4d77.5929155');
  await page.locator('canvas').click({
    position: {
      x: 738,
      y: 498
    }
  });
  await page.locator('#reveal-card').click();
  await page.locator('canvas').click({
    position: {
      x: 803,
      y: 226
    }
  });
  await page.getByRole('button', { name: 'Directions to OSlash' }).click();
  await page.locator('canvas').click({
    position: {
      x: 641,
      y: 346
    }
  });
  await page.locator('canvas').dblclick({
    position: {
      x: 641,
      y: 346
    }
  });
});