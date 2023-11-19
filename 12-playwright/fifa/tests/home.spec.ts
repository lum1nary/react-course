import { test, expect } from '@playwright/test';

const URL = 'https://www.plus.fifa.com/en/';

test('Home page should contain title', async ({ page }) => {
  await page.goto(URL);

  await expect(page).toHaveTitle('FIFA+');
});

test('Verify the logo is visible and has alt title', async ({ page }) => {
  await page.goto(URL);

  const logo = page.locator('#chili-logo');
  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute('alt', 'Just Chilling');
});

test('Verify navigation links are visible and have correct text', async ({ page }) => {
  const expectedLinks = [
    "HOME",
    "FIFA U-17 WORLD CUP 2023™",
    "LIVE",
    "ORIGINALS",
    "ARCHIVE",
  ];

  await page.goto(URL);

  const navLinks = page.locator('nav a[data-id]:not([data-testid])');

  // await page.waitForTimeout(1000);
  // expect(await navLinks.allInnerTexts()).toEqual(expectedLinks);

  await expect(navLinks.first()).toBeVisible();
  await expect(navLinks).toHaveCount(expectedLinks.length);
  expect(await navLinks.allInnerTexts()).toEqual(expectedLinks);
});

test('Verify copyright equal to current year', async ({ page }) => {
  await page.goto(URL);

  const copyright = page.locator('div.copyright-caption');
  const now = new Date();
  const copyrightText = await copyright.innerText();
  expect(copyrightText.includes(now.getFullYear().toString())).toBeTruthy();
})

const LANGS = ['en', 'es', 'it', 'de', 'fr', 'pt'];

for (const lang of LANGS)
{
  test(`Verify language panel is equal to address (${lang})`, async ({ page }) => {
    await page.goto(`https://www.plus.fifa.com/${lang}/`);

    const langLabel = page.locator('div span.headerLanguageToggle__label');
    await langLabel.waitFor({state: "visible"})

    expect(langLabel).toHaveText(lang);
  })
}


