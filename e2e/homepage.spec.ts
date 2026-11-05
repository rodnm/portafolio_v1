import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
    await page.goto('./');

    // Verify title
    await expect(page).toHaveTitle(/Portafolio/);

    // Verify sections
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();

    // Test navigation
    await page.click('a[href="#contact"]');
    await expect(page.locator('#contact')).toBeInViewport();
});

test('theme toggle works', async ({ page }) => {
    await page.goto('./');

    const themeButton = page.getByRole('button', { name: /toggle theme/i });
    await themeButton.click();

    const html = page.locator('html');
    await expect(html).toHaveClass(/dark/);
});
