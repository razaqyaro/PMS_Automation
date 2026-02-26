import { Page, Locator, expect } from '@playwright/test';
import { step } from 'allure-js-commons';

export class CustomerManagementPage {
    readonly page: Page;
    readonly setups: Locator;
    readonly setupItems: Locator;
    readonly search: Locator;
    readonly addGenderButton: Locator;
    readonly addGenderDialog: Locator;
    readonly enterItemInput: Locator;
    readonly saveButton: Locator;
    readonly successToast: Locator;
    readonly setupItemActionButton: Locator;
    readonly deleteAction: Locator;
    readonly deleteButton: Locator;
    readonly editButton: Locator;
    readonly saveChangesButton: Locator;
    readonly addNationalityButton: Locator;
    readonly addOwnershipTypeButton: Locator;
    readonly addSocialMediaButton: Locator;
    readonly addTitleButton: Locator;
    readonly customerManagementMenu: Locator;
    readonly customerManagementSetupMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.setups = page.locator("div[class='text-xs font-medium text-center']");
        this.setupItems = page.locator("td p");
        this.search = page.locator("input[placeholder*='Search']");
        this.addGenderButton = page.locator("div button");
        this.addGenderDialog = page.locator("div[class='dialog-content']");
        this.enterItemInput = page.locator("div[class='dialog-content'] input");
        this.saveButton = page.locator("div[class='dialog-content'] button").nth(1);
        this.successToast = page.locator("p[class='mx-1 font-medium']");
        this.setupItemActionButton = page.locator("div[class='pr-3 dropdown']");
        this.deleteAction = page.getByText("Delete");
        this.deleteButton = page.locator("div[class='dialog-content'] button").nth(1);
        this.editButton = page.getByText("Edit");
        this.saveChangesButton = page.getByText("Save Changes");
        this.addNationalityButton = page.locator("button span");
        this.addOwnershipTypeButton = page.locator("button span");
        this.addSocialMediaButton = page.locator("button span");
        this.addTitleButton = page.locator("button span");
        this.customerManagementMenu = page.getByText("Customer Management", { exact: true });
        this.customerManagementSetupMenu = page.locator("#submodules").first();
    }

    async navigateToSetupPage() {
        await step('Navigate to customer management setup page', async () => {
            await this.page.goto("/customer-management/setups");
        });
    }

    async clickOnCustomerManagementMenu() {
        await step('Click on Customer Management menu', async () => {
            await this.customerManagementMenu.waitFor({ state: 'visible', timeout: 20000 });
            await this.customerManagementMenu.click();
        });
    }

    async clickOnCustomerManagementSetupMenu() {
        await step('Click on Customer Management Setup submenu', async () => {
            await this.customerManagementSetupMenu.click();
        });
    }


    async clickOnCustomerTypeSetup() {
        await step('Click on Customer Type setup', async () => {
            await this.setups.nth(0).click();
        });
    }

    async clickOnGenderSetup() {
        await step('Click on Gender setup', async () => {
            await this.setups.nth(1).click();
        });
    }

    async clickOnNationalitySetup() {
        await step('Click on Nationality setup', async () => {
            await this.setups.nth(2).click();
        });
    }

    async clickOnOwnershipTypeSetup() {
        await step('Click on Ownership Type setup', async () => {
            await this.setups.nth(3).click();
        });
    }

    async clickOnResidentTypeSetup() {
        await step('Click on Resident Type setup', async () => {
            await this.setups.nth(4).click();
        });
    }

    async clickOnSocialMediaSetup() {
        await step('Click on Social Media setup', async () => {
            await this.setups.nth(5).click();
        });
    }

    async clickOnTitleSetup() {
        await step('Click on Title setup', async () => {
            await this.setups.nth(6).click();
        });
    }

    async getSetupItems() {
        return await step('Get list of setup items', async () => {
            const setupElements = await this.setupItems.all();
            const setupItemTexts: string[] = [];

            for (const element of setupElements) {
                const text = await element.textContent();
                if (text) {
                    setupItemTexts.push(text.trim());
                }
            }

            return setupItemTexts;
        });
    }

    async verifySetupItemsExist(expectedTypes) {
        return await step('Verify setup items match expected types', async () => {
            const actualTypes = await this.getSetupItems();
            return expectedTypes.every(expectedType =>
                actualTypes.includes(expectedType)
            );
        });
    }

    async searchSetupItem(setupItem: string) {
        await step(`Search for setup item: ${setupItem}`, async () => {
            await this.search.fill(setupItem);
            await this.search.press('Enter');
        });
    }

    async clickOnAddGenderButton() {
        await step('Click on Add button', async () => {
            await this.addGenderButton.click();
        });
    }

    async assertSuccessToastDisplayed() {
        await step('Assert success toast is displayed', async () => {
            await expect(this.successToast).toHaveText("Success");
        });
    }

    async verifyCustomerTypesSetupItems() {
        return await step('Verify Customer Type setup items', async () => {
            const expectedTypes = ['COMPANY', 'INDIVIDUAL', 'JOINT-OWNERSHIP', 'MULTI-OWNERSHIP', 'PROSPECTIVE'];
            return this.verifySetupItemsExist(expectedTypes);
        });
    }

    async verifyNationalitiesSetupItems() {
        return await step('Verify Nationality setup items', async () => {
            const expectedTypes = ['AFGHANISTAN', 'ALBANIA', 'ALGERIA', 'ANDORRA', 'ANGOLA'];
            return this.verifySetupItemsExist(expectedTypes);
        });
    }

    async verifyOwnershipTypesSetupItems() {
        return await step('Verify Ownership Type setup items', async () => {
            const expectedTypes = ['CENTRAL', 'DEDICATED', 'LEASED'];
            return this.verifySetupItemsExist(expectedTypes);
        });
    }

    async verifyResidentTypesSetupItems() {
        return await step('Verify Resident Type setup items', async () => {
            const expectedTypes = ['CITIZEN', 'NON-CITIZEN'];
            return this.verifySetupItemsExist(expectedTypes);
        });
    }

    async verifySocialMediaSetupItems() {
        return await step('Verify Social Media setup items', async () => {
            const expectedTypes = ['FACEBOOK', 'INSTAGRAM', 'LINKEDIN', 'TWITTER'];
            return this.verifySetupItemsExist(expectedTypes);
        });
    }

    async verifyTitlesSetupItems() {
        return await step('Verify Title setup items', async () => {
            const expectedTypes = ['DR', 'MR', 'MS', 'MRS'];
            return this.verifySetupItemsExist(expectedTypes);
        });
    }

    async verifyAddGenderDialogDisplayed() {
        await step('Verify add dialog is displayed', async () => {
            await expect(this.addGenderDialog).toBeVisible();
        });
    }

    async verifyGenderSetupItems() {
        return await step('Verify Gender setup items', async () => {
            const expectedTypes = ['FEMALE', 'MALE'];
            return this.verifySetupItemsExist(expectedTypes);
        });
    }

    async addGender(gender: string) {
        await step(`Add gender: ${gender}`, async () => {
            await this.clickOnAddGenderButton();
            await this.verifyAddGenderDialogDisplayed();
            await this.enterItemInput.fill(gender);
            await this.saveButton.click();
        });
    }

    async editGender(gender: string) {
        await step(`Edit gender to: ${gender}`, async () => {
            await this.setupItemActionButton.last().click();
            await this.editButton.click();
            await this.enterItemInput.clear();
            await this.enterItemInput.fill(gender);
            await this.saveChangesButton.click();
        });
    }

    async deleteGender() {
        await step('Delete gender', async () => {
            await this.setupItemActionButton.last().click();
            await this.deleteAction.click();
            await this.deleteButton.click();
        });
    }

    async addNationality(country: string){
        await step(`Add nationality: ${country}`, async () => {
            await this.addNationalityButton.click();
            await this.enterItemInput.fill(country);
            await this.saveButton.click();
        });
    }

    async editNationality(country: string){
        await step(`Edit nationality to: ${country}`, async () => {
            await this.setupItemActionButton.last().click();
            await this.editButton.click();
            await this.enterItemInput.fill(country);
            await this.saveChangesButton.click();
        });
    }

    async deleteNationality(){
        await step('Delete nationality', async () => {
            await this.setupItemActionButton.last().click();
            await this.deleteAction.click();
            await this.deleteButton.click();
        });
    }

    async addOwnershipType(ownershipType: string){
        await step(`Add ownership type: ${ownershipType}`, async () => {
            await this.addOwnershipTypeButton.click();
            await this.enterItemInput.fill(ownershipType);
            await this.saveButton.click();
        });
    }

    async editOwnershipType(ownershipType: string){
        await step(`Edit ownership type to: ${ownershipType}`, async () => {
            await this.setupItemActionButton.last().click();
            await this.editButton.click();
            await this.enterItemInput.fill(ownershipType);
            await this.saveChangesButton.click();
        });
    }

    async deleteOwnershipType(){
        await step('Delete ownership type', async () => {
            await this.setupItemActionButton.last().click();
            await this.deleteAction.click();
            await this.deleteButton.click();
        });
    }

    async addSocialMedia(socialMedia: string){
        await step(`Add social media: ${socialMedia}`, async () => {
            await this.addSocialMediaButton.click();
            await this.enterItemInput.fill(socialMedia);
            await this.saveButton.click();
        });
    }

    async editSocialMedia(socialMedia: string){
        await step(`Edit social media to: ${socialMedia}`, async () => {
            await this.setupItemActionButton.last().click();
            await this.editButton.click();
            await this.enterItemInput.fill(socialMedia);
            await this.saveChangesButton.click();
        });
    }

    async deleteSocialMedia(){
        await step('Delete social media', async () => {
            await this.setupItemActionButton.last().click();
            await this.deleteAction.click();
            await this.deleteButton.click();
        });
    }
    async addTitle(title: string){
        await step(`Add title: ${title}`, async () => {
            await this.addTitleButton.click();
            await this.enterItemInput.fill(title);
            await this.saveButton.click();
        });
    }

    async editTitle(title: string){
        await step(`Edit title to: ${title}`, async () => {
            await this.setupItemActionButton.last().click();
            await this.editButton.click();
            await this.enterItemInput.fill(title);
            await this.saveChangesButton.click();
        });
    }

    async deleteTitle(){
        await step('Delete title', async () => {
            await this.setupItemActionButton.last().click();
            await this.deleteAction.click();
            await this.deleteButton.click();
        });
    }

}