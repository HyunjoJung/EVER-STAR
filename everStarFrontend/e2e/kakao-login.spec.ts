import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = 'screenshots';
const ensureScreenshotDir = () => {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }
};
const cleanServiceWorkers = async (page: any) => {
  await page.addInitScript(() => {
    // Set Playwright flag to bypass Firebase FCM
    (window as any).__playwright = true;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((reg) => reg.unregister()));
    }
    // Stub Notification permission to avoid permission-blocked overlays in tests
    if (typeof Notification !== 'undefined') {
      Notification.requestPermission = () => Promise.resolve('granted');
    }
  });
};

test.describe('Kakao Login Flow with Mock', () => {
  test.beforeAll(() => {
    ensureScreenshotDir();
  });

  test('should login with mock and navigate to everstar', async ({ page }) => {
    // Clean service workers and set Playwright flag
    await cleanServiceWorkers(page);
    // 콘솔 메시지 수집
    const consoleMessages: string[] = [];
    page.on('console', (msg) => {
      consoleMessages.push(msg.text());
      console.log(`[Browser] ${msg.type()}: ${msg.text()}`);
    });

    // 에러 수집
    page.on('pageerror', (error) => {
      console.error(`[Browser Error] ${error.message}`);
    });

    // 로그인 페이지로 이동
    console.log('[Test] Navigating to /login...');
    await page.goto('/login');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000); // give time for UI to fully render

    // 로그인 페이지 스크린샷
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '00-login-page.png'),
      fullPage: true,
    });

    // 카카오 로그인 버튼 찾기
    console.log('[Test] Looking for Kakao login button...');
    const kakaoButton = page.locator('img[alt*="kakao"]').first();
    await expect(kakaoButton).toBeVisible({ timeout: 10000 });
    console.log('[Test] Kakao button found!');

    // 카카오 로그인 버튼 클릭 (force click to bypass overlays)
    console.log('[Test] Clicking Kakao login button...');
    await kakaoButton.click({ force: true });

    // 잠시 대기 (디버그 로그 출력 대기)
    await page.waitForTimeout(2000);

    // 현재 URL 확인
    const currentUrl = page.url();
    console.log('[Test] Current URL after click:', currentUrl);

    // 디버그 로그 출력
    const debugLogs = consoleMessages.filter((msg) => msg.includes('[DEBUG]'));
    console.log('[Test] Debug logs:', debugLogs);

    // URL이 변경되었는지 확인
    if (currentUrl.includes('kauth.kakao.com')) {
      console.error('[Test] ❌ FAILED: Redirected to Kakao OAuth');
      console.error('[Test] Check if useMockLogin is set to true in LoginContainer');
      throw new Error('Mock login failed - redirected to real Kakao OAuth');
    }

    // /earth로 이동했는지 확인 (타임아웃 10초)
    try {
      await page.waitForURL(/\/earth/, { timeout: 10000 });
      console.log('[Test] ✅ Successfully navigated to /earth');
    } catch (error) {
      console.error('[Test] ❌ Failed to navigate to /earth');
      console.error('[Test] Current URL:', page.url());
      throw error;
    }

    // 페이지 로드 완료 대기
    await page.waitForLoadState('networkidle');
    await page.locator('text=지구별').first().waitFor({ state: 'visible', timeout: 15000 });
    await page.waitForTimeout(1500);
    console.log('[Test] Page fully loaded, taking screenshot...');

    // 스크린샷 캡쳐
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '07-earth-page-screenshot.png'),
      fullPage: true,
    });
    console.log('[Test] ✅ Screenshot saved: 12-earth-page-screenshot.png');
  });
});
