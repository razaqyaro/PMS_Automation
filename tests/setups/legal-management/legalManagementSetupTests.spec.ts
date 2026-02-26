import {test, expect} from '../../../testFixtures/testFixtures';
import {TestData} from "../../../test-data/testData";

test.describe('Legal Management Setup Tests', () => {
    test.setTimeout(60000); // Allow time for login + navigation

    test.beforeEach(async ({legalManagementPage, loginPage}) => {
        await loginPage.goto();
        await loginPage.fillEmailPhoneNumber(TestData.MIS_ADMIN_USER_NAME);
        await loginPage.fillPassword(TestData.MIS_ADMIN_USER_PASSWORD);
        await loginPage.clickLoginButton();
        await legalManagementPage.clickOnLegalManagementMenu();
        await legalManagementPage.clickOnLegalManagementSetupMenu();
    });

    test.describe('Setup Items', () => {
        test('Case type setup items should be available', async ({legalManagementPage}) => {
            await legalManagementPage.clickOnCaseTypeSetup();
            const exists = await legalManagementPage.verifyCaseTypesSetupItems();
            expect(exists).toBeTruthy();
        });

        test('Consent type setup items should be available', async ({legalManagementPage}) => {
            await legalManagementPage.clickOnConsentTypeSetup();
            const exists = await legalManagementPage.verifyConsentTypesSetupItems();
            expect(exists).toBeTruthy();
        });

        test('Status type setup items should be available', async ({legalManagementPage}) => {
            await legalManagementPage.clickOnStatusTypeSetup();
            const exists = await legalManagementPage.verifyStatusTypesSetupItems();
            expect(exists).toBeTruthy();
        });

        test('Transfer type setup items should be available', async ({legalManagementPage}) => {
            await legalManagementPage.clickOnTransferTypeSetup();
            const exists = await legalManagementPage.verifyTransferTypesSetupItems();
            expect(exists).toBeTruthy();
        });
    });

    test.describe('Case Type CRUD', () => {
        test('should add case type successfully', async ({legalManagementPage}) => {
            await legalManagementPage.clickOnCaseTypeSetup();
            await legalManagementPage.addCaseType('TEST CASE TYPE');
            await legalManagementPage.assertSuccessToastDisplayed();
        });

        test('should edit case type successfully', async ({legalManagementPage}) => {
            await legalManagementPage.clickOnCaseTypeSetup();
            await legalManagementPage.editCaseType('TEST CASE TYPE EDITED');
            await legalManagementPage.assertSuccessToastDisplayed();
        });

        test('should delete case type successfully', async ({legalManagementPage}) => {
            await legalManagementPage.clickOnCaseTypeSetup();
            await legalManagementPage.deleteCaseType();
            await legalManagementPage.assertSuccessToastDisplayed();
        });
    });

    test.describe('Search Tests', () => {
        test('should search case types successfully', async ({legalManagementPage}) => {
            await legalManagementPage.clickOnCaseTypeSetup();
            await legalManagementPage.searchSetupItem('TENANCY');
            const items = await legalManagementPage.getSetupItems();
            expect(items.some(i => i.includes('TENANCY'))).toBeTruthy();
        });

        test('should search consent types successfully', async ({legalManagementPage}) => {
            await legalManagementPage.clickOnConsentTypeSetup();
            await legalManagementPage.searchSetupItem('Consent to Assign');
            const items = await legalManagementPage.getSetupItems();
            expect(items.some(i => i.includes('Consent to Assign'))).toBeTruthy();
        });
    });

});
