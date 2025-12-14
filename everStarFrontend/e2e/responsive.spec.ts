import { test, expect, devices } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = 'screenshots';
const ensureScreenshotDir = () => {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }
};
const dismissDevOverlay = async (page: any) => {
  await page.evaluate(() => {
    const overlay = document.querySelector('iframe#webpack-dev-server-client-overlay');
    overlay?.remove();
    const errorOverlay = document.querySelector('[data-nextjs-error-overlay], [data-overlay]');
    errorOverlay?.remove();
  });
};
const cleanServiceWorkers = async (page: any) => {
  await page.addInitScript(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((reg) => reg.unregister()));
    }
    if (typeof Notification !== 'undefined') {
      Notification.requestPermission = () => Promise.resolve('granted');
    }
  });
};

test.describe('Responsive Design Tests', () => {
  test.beforeAll(() => {
    ensureScreenshotDir();
  });

  test('should display correctly on mobile', async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['iPhone 12'],
    });
    const page = await context.newPage();
    await cleanServiceWorkers(page);

    await page.goto('/login');
    await page.waitForLoadState('networkidle');
    const kakaoButton = page.locator('img[alt*="kakao"]').first();
    await kakaoButton.click({ force: true });

    await page.waitForURL(/\/earth/, { timeout: 15000 });
    await page.locator('text=지구별').first().waitFor({ state: 'visible', timeout: 15000 });
    await page.waitForTimeout(1500);
    await dismissDevOverlay(page);

    // 모바일 뷰포트 확인
    const viewport = page.viewportSize();
    expect(viewport?.width).toBeLessThan(500);
    await page.locator('text=지구별').first().waitFor({ state: 'visible', timeout: 15000 });
    await page.waitForTimeout(1500);

    // 스크린샷 캡쳐
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '12-earth-page-mobile.png'),
      fullPage: true,
    });

    console.log('✅ Mobile view displays correctly');

    await context.close();
  });

  test('should display correctly on tablet', async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['iPad Pro'],
    });
    const page = await context.newPage();
    await cleanServiceWorkers(page);

    await page.goto('/login');
    await page.waitForLoadState('networkidle');
    const kakaoButton = page.locator('img[alt*="kakao"]').first();
    await kakaoButton.click({ force: true });

    await page.waitForURL(/\/earth/, { timeout: 15000 });
    await page.locator('text=지구별').first().waitFor({ state: 'visible', timeout: 15000 });
    await page.waitForTimeout(1500);
    await dismissDevOverlay(page);

    // 스크린샷 캡쳐
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '13-earth-page-tablet.png'),
      fullPage: true,
    });

    console.log('✅ Tablet view displays correctly');

    await context.close();
  });

  test('should display correctly on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await cleanServiceWorkers(page);

    await page.goto('/login');
    await page.waitForLoadState('networkidle');
    const kakaoButton = page.locator('img[alt*="kakao"]').first();
    await kakaoButton.click({ force: true });

    await page.waitForURL(/\/earth/, { timeout: 15000 });
    await page.locator('text=지구별').first().waitFor({ state: 'visible', timeout: 15000 });
    await page.waitForTimeout(1500);
    await dismissDevOverlay(page);

    // 스크린샷 캡쳐
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '14-earth-page-desktop.png'),
      fullPage: true,
    });

    console.log('✅ Desktop view displays correctly');
  });
});
