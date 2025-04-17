import {Locator, Page} from "@playwright/test";

export class ForgotPasswordPage {
    constructor(page: Page) {
        this.page = page;
        this.emailPhoneNumberInputField = page.locator("input[placeholder='Enter your email address or phone number']");
        this.sendCodeButton = this.page.getByRole('button', { name: 'Send Code' });
        this.loginLink = page.locator("a[href='/login']");
    }

    readonly page: Page;
    readonly emailPhoneNumberInputField: Locator;
    readonly sendCodeButton: Locator;
    readonly loginLink: Locator;
}