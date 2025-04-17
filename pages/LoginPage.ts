import {Locator, Page} from "@playwright/test";

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
        this.loginButton = page.locator("button[type='button']");
        this.createAccountLink = page.locator("p span");
        this.expectErrorMessage = page.locator("div.flex.justify-between div p");
        this.emptyEmailPhoneNumberOrPasswordErrorMessage = page.locator("p[class*='text-primary-red']");
    }

    async goto() {
        await this.page.goto('/');
    }

    async fillEmailPhoneNumber(email: string) {
        await this.emailPhoneNumberInputField.fill(email);
    }
    async fillPassword(password: string) {
        await this.passwordInputField.fill(password);
    }

    async clickRememberMe() {
        await this.rememberMeCheckbox.click();
    }

    async clickForgotPassword() {
        await this.forgotPasswordLink.click();
    }

    async clickLoginButton() {
        await this.loginButton.click();
        await this.page.waitForLoadState("networkidle")
    }

    async getErrorMessage(){
        await this.expectErrorMessage.waitFor({ state: 'visible' });
        return await this.expectErrorMessage.nth(2).textContent();
    }

    async getEmptyEmailPhoneNumberErrorMessage(){
        return await this.emptyEmailPhoneNumberOrPasswordErrorMessage.first().textContent();
    }

    async getEmptyPasswordErrorMessage(){
        return await this.emptyEmailPhoneNumberOrPasswordErrorMessage.nth(1).textContent();
    }
}