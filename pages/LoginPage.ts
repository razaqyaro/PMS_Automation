import { Locator, Page } from "@playwright/test";
import { step } from "allure-js-commons";

export class LoginPage {
    readonly page: Page;
    readonly emailPhoneNumberInputField: Locator;
    readonly passwordInputField: Locator;
    readonly rememberMeCheckbox: Locator;
    readonly forgotPasswordLink: Locator;
    readonly loginButton: Locator;
    readonly createAccountLink: Locator;
    readonly expectErrorMessage: Locator;
    readonly emptyEmailPhoneNumberOrPasswordErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailPhoneNumberInputField = page.locator("input[name='emailOrPhone']");
        this.passwordInputField = page.locator("input[name='password']");
        this.rememberMeCheckbox = page.locator("input[type='checkbox']");
        this.forgotPasswordLink = page.getByText("Forgot password");
        this.loginButton = page.locator("xpath=//button[normalize-space()='Log in']");
        this.createAccountLink = page.locator("p span");
        this.expectErrorMessage = page.locator("div.flex.justify-between div p");
        this.emptyEmailPhoneNumberOrPasswordErrorMessage = page.locator("p[class*='text-primary-red']");
    }

    async goto(): Promise<void> {
        await step("Navigate to login page", (async () => {
            await this.page.goto('/');
            await this.page.waitForLoadState("networkidle");
        }) as any);
    }

    async fillEmailPhoneNumber(email: string): Promise<void> {
        await step("Fill email or phone number", (async () => {
            await this.emailPhoneNumberInputField.fill(email);
        }) as any);
    }

    async fillPassword(password: string): Promise<void> {
        await step("Fill password", (async () => {
            await this.passwordInputField.fill(password);
        }) as any);
    }

    async clickRememberMe(): Promise<void> {
        await step("Click Remember Me checkbox", (async () => {
            await this.rememberMeCheckbox.click();
        }) as any);
    }

    async clickForgotPassword(): Promise<void> {
        await step("Click Forgot password link", (async () => {
            await this.forgotPasswordLink.click();
        }) as any);
    }

    async clickLoginButton(): Promise<void> {
        await step("Click Log in button", (async () => {
            await this.loginButton.click();
            await this.page.waitForLoadState("networkidle");
        }) as any);
    }

    async getErrorMessage(): Promise<string | null> {
        return await step("Get error message text", (async () => {
            await this.expectErrorMessage.waitFor({ state: 'visible' });
            return await this.expectErrorMessage.nth(2).textContent();
        }) as any);
    }

    async getEmptyEmailPhoneNumberErrorMessage(): Promise<string | null> {
        return await step("Get empty email/phone error message", (async () => {
            return await this.emptyEmailPhoneNumberOrPasswordErrorMessage.first().textContent();
        }) as any);
    }

    async getEmptyPasswordErrorMessage(): Promise<string | null> {
        return await step("Get empty password error message", (async () => {
            return await this.emptyEmailPhoneNumberOrPasswordErrorMessage.nth(1).textContent();
        }) as any);
    }
}
