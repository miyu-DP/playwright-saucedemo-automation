import { test, expect } from '@playwright/test';

test('Valid login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await page.locator('[data-test="password"]').click();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});