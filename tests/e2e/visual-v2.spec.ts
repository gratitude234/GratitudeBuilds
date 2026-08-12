import { expect, test } from "@playwright/test";

test("sunlit homepage renders its real media without overflow", async ({ page }, testInfo) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("products");
  await expect(page.getByRole("img", { name: "Gratitude Olanibi, founder of Gratitude Builds" })).toBeVisible();
  await expect(page.getByRole("img", { name: "JabuStudy student dashboard showing practice tools and course materials" })).toBeVisible();
  await expect(page.getByRole("img", { name: "JabuMarket home screen with listings, food vendors, and quick access categories" })).toBeVisible();
  await expect(page.getByRole("img", { name: "Indegenius social feed with articles, debates, and writing tools" })).toBeVisible();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({ path: testInfo.outputPath("homepage-v2.png"), fullPage: false });
});

test("mobile sunlit homepage and menu stay inside the viewport", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);

  await page.getByRole("button", { name: "Menu" }).click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath("homepage-v2-mobile-menu.png"), fullPage: false });
});
