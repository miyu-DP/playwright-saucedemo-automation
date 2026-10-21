import { test, expect } from '@playwright/test';

test('Invalid login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('secret');

  await page.locator('[data-test="password"]').click();

  await page.locator('[data-test="password"]').fill('secret');
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});