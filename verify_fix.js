import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1280, height: 1600 });

  console.log('Checking Ministral 3 8B page...');
  await page.goto('http://localhost:4321/models/ministral-3-8b/');
  await page.waitForLoadState('networkidle');

  await page.screenshot({ path: '/home/jules/verification/screenshots/ministral_8b_verified_fix.png', fullPage: true });

  await browser.close();
  console.log('Verification screenshot saved.');
})();
