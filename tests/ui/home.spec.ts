import { test, expect } from "@playwright/test";
import { HomePage } from "../PageObjects/HomePage";

test.describe("Personal Site Smoke Tests", () => {
    test("Home page loads and header is visible", async ({ page }) => {
        const home = new HomePage(page);
        await home.goto();
        await expect(home.header).toHaveText("Playwright Demo Site with CI/CD Pipeline");
    });

    test("Navigation to Login, Register, Contact, Features works", async ({ page }) => {
        const home = new HomePage(page);
        await home.goto();
        await home.navigateTo("Login");
        await expect(page.getByRole("heading", { level: 2, name: "Login" })).toBeVisible();
        await home.navigateTo("Register");
        await expect(page.getByRole("heading", { level: 2, name: "Register" })).toBeVisible();
        await home.navigateTo("Contact");
        await expect(page.getByRole("heading", { level: 2, name: "Contact Us" })).toBeVisible();
        await home.navigateTo("Features");
        await expect(page.getByRole("heading", { level: 2, name: "Advanced Features" })).toBeVisible();
    });
});
