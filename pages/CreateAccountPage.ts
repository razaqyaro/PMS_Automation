import {Locator, Page} from "@playwright/test";

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
      await this.page.goto('/create-account');
    }

  async fillFirstName(firstName: string) {
      await this.firstNameInputField.fill(firstName);
    }

    async fillLastName(lastName: string) {
      await this.lastNameInputField.fill(lastName);
    }

    async fillMiddleName(middleName: string) {
      await this.middleNameInputField.fill(middleName);
    }

    async fillEmail(email: string) {
      await this.emailInputField.fill(email);
    }

    async fillPhoneNumber(phoneNumber: string) {
      await this.phoneNumberInputField.fill(phoneNumber);
    }

    async clickContinueButton() {
      await this.continueButton.click();
    }

    async clickChangePhotoButton() {
      await this.changePhotoButton.click();
    }

    async clickLoginLink() {
      await this.loginLink.click();
    }


}