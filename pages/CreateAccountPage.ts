import { Locator, Page } from "@playwright/test";
import { step } from "allure-js-commons";

export class CreateAccountPage {
  readonly page: Page;
  readonly firstNameInputField: Locator;
  readonly lastNameInputField: Locator;
  readonly middleNameInputField: Locator;
  readonly emailInputField: Locator;
  readonly phoneNumberInputField: Locator;
  readonly continueButton: Locator;
  readonly changePhotoButton: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInputField = page.locator("input[placeholder='Enter your first name']");
    this.lastNameInputField = page.locator("input[placeholder='Enter your last name']");
    this.middleNameInputField = page.locator("input[placeholder='Enter your middle name']");
    this.emailInputField = page.locator("input[placeholder='Enter your email']");
    this.phoneNumberInputField = page.locator("input[placeholder='Enter your phone number']");
    this.continueButton = this.page.getByRole('button', { name: 'Continue' });
    this.loginLink = page.locator("a[href='/login']");
    this.changePhotoButton = this.page.getByRole('button', { name: 'Continue' });
  }
    async navigateToCreateAccountPage() {
        await step('Navigate to create account page', async () => {
            await this.page.goto('/create-account');
        });
    }

  async fillFirstName(firstName: string) {
        await step('Fill first name', async () => {
            await this.firstNameInputField.fill(firstName);
        });
    }

    async fillLastName(lastName: string) {
        await step('Fill last name', async () => {
            await this.lastNameInputField.fill(lastName);
        });
    }

    async fillMiddleName(middleName: string) {
        await step('Fill middle name', async () => {
            await this.middleNameInputField.fill(middleName);
        });
    }

    async fillEmail(email: string) {
        await step('Fill email', async () => {
            await this.emailInputField.fill(email);
        });
    }

    async fillPhoneNumber(phoneNumber: string) {
        await step('Fill phone number', async () => {
            await this.phoneNumberInputField.fill(phoneNumber);
        });
    }

    async clickContinueButton() {
        await step('Click Continue button', async () => {
            await this.continueButton.click();
        });
    }

    async clickChangePhotoButton() {
        await step('Click Change photo button', async () => {
            await this.changePhotoButton.click();
        });
    }

    async clickLoginLink() {
        await step('Click Login link', async () => {
            await this.loginLink.click();
        });
    }


}