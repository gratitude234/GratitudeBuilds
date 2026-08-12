import { expect, test } from "@playwright/test";

test("home presents the product builder positioning and proof", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("I turn ideas into");
  await expect(page.getByLabel("Selected facts").getByText("1,500+", { exact: true })).toBeVisible();
  await expect(page.getByLabel("Selected facts").getByText("300+", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "See the JabuStudy case study" })).toBeVisible();
});

test("all case study routes render their accurate status", async ({ page }) => {
  await page.goto("/work/jabustudy");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("JabuStudy");
  await expect(page.getByText("1,500+", { exact: true })).toBeVisible();

  await page.goto("/work/indegenius");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Indegenius");
  await expect(page.getByText("300+", { exact: true })).toBeVisible();

  await page.goto("/work/jabumarket");
  await expect(page.getByText("In the workshop — pre-launch", { exact: true })).toBeVisible();
});

test("contact opens a prefilled WhatsApp conversation", async ({ page }) => {
  await page.goto("/contact");
  const link = page.getByRole("link", { name: /Tell me about it/ });
  await expect(link).toHaveAttribute("href", /wa\.me\/\d+\?text=/);
});

test("mobile navigation exposes every primary route", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Menu" }).click();
  const navigation = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(navigation).toBeVisible();
  await expect(navigation.locator('a[href="/resume"]')).toBeVisible();
});
