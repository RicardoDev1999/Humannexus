import { test, expect } from "@playwright/test";

const contextPath = "/humannexus";

function collectRuntimeErrors(page) {
  const errors = [];
  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  return errors;
}

async function expectLoaderHidden(page) {
  await expect(page.locator("#loading")).toHaveCSS("opacity", "0");
}

test("home and primary content routes render without runtime errors", async ({ page }) => {
  const errors = collectRuntimeErrors(page);

  await page.goto(contextPath, { waitUntil: "domcontentloaded" });
  await expect(page).toHaveTitle(/.+/);
  await expectLoaderHidden(page);

  await page.goto(`${contextPath}/services`, { waitUntil: "domcontentloaded" });
  await expect(page.locator("h1").filter({ hasText: "Serviços" })).toBeVisible();
  await expectLoaderHidden(page);

  expect(errors).toEqual([]);
});

test("contact page mounts a Turnstile container", async ({ page }) => {
  await page.goto(`${contextPath}/contacts`, { waitUntil: "domcontentloaded" });

  const turnstile = page.locator("#contact-turnstile");
  await expect(turnstile).toBeVisible();
  await expect(turnstile).toHaveAttribute("data-sitekey", /.+/);
  await expect(turnstile).toHaveAttribute("data-language", "pt-br");
  await expect(page.locator('script[src*="turnstile/v0/api.js?render=explicit"]')).toHaveCount(1);
});

test("service image uses Astro shared transition and survives back navigation", async ({ page }) => {
  const errors = collectRuntimeErrors(page);

  await page.goto(`${contextPath}/services`, { waitUntil: "domcontentloaded" });
  const serviceLink = page.locator('a[href*="/services/"]').first();
  await expect(serviceLink).toBeVisible();

  const image = serviceLink.locator("img");
  await expect(image).toBeVisible();
  const transitionName = await image.evaluate((element) =>
    getComputedStyle(element).viewTransitionName
  );
  expect(transitionName).toMatch(/^service-image-/);

  const initialNavigationCount = await page.evaluate(
    () => performance.getEntriesByType("navigation").length
  );
  await serviceLink.click();
  await expect(page).toHaveURL(/\/humannexus\/services\/[^/]+$/);
  await expect(page.locator("main img").first()).toBeVisible();
  await expectLoaderHidden(page);

  const detailNavigationCount = await page.evaluate(
    () => performance.getEntriesByType("navigation").length
  );
  expect(detailNavigationCount).toBe(initialNavigationCount);

  await page.goBack();
  await expect(page).toHaveURL(/\/humannexus\/services$/);
  await expect(serviceLink).toBeVisible();
  await expectLoaderHidden(page);

  expect(errors).toEqual([]);
});

test("context theme does not leak between Humannexus and Studio", async ({ page }) => {
  await page.goto(contextPath, { waitUntil: "domcontentloaded" });

  const humannexusColor = await page.evaluate(() =>
    getComputedStyle(document.documentElement).getPropertyValue("--color-h-900").trim()
  );

  await page.goto("/studio", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveURL(/\/studio\/?$/);
  await page.goBack();
  await expect(page).toHaveURL(/\/humannexus\/?$/);

  await page.goto("/studio", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveURL(/\/studio\/?$/);
  await page.goBack();
  await expect(page).toHaveURL(/\/humannexus\/?$/);

  const finalHumannexusColor = await page.evaluate(() =>
    getComputedStyle(document.documentElement).getPropertyValue("--color-h-900").trim()
  );
  expect(finalHumannexusColor).toBe(humannexusColor);
  await expectLoaderHidden(page);
});
