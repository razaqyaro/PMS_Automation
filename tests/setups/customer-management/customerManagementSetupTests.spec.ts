import {test, expect} from '../../../testFixtures/testFixtures';
import {TestData} from "../../../test-data/testData";

test.describe('Customer Management Setup Tests', () => {
    test.setTimeout(60000); // Allow time for login + navigation

    test.beforeEach(async ({customerManagementPage, loginPage}) => {
        await loginPage.goto();
        await loginPage.fillEmailPhoneNumber(TestData.MIS_ADMIN_USER_NAME);
        await loginPage.fillPassword(TestData.MIS_ADMIN_USER_PASSWORD);
        await loginPage.clickLoginButton();
        await customerManagementPage.clickOnCustomerManagementMenu();
        await customerManagementPage.clickOnCustomerManagementSetupMenu();
    });
    test.describe('Setup Items', () => {
        test('Customer type setup items should be available', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnCustomerTypeSetup()
            await customerManagementPage.verifyCustomerTypesSetupItems();
        });

        test('Gender setup items should be available', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnGenderSetup();
            await customerManagementPage.verifyGenderSetupItems();
        });

        test('Nationality setup items should be available', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnNationalitySetup();
            await customerManagementPage.verifyNationalitiesSetupItems();
        });

        test('Ownership type setup items should be available', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnOwnershipTypeSetup();
            await customerManagementPage.verifyOwnershipTypesSetupItems();
        });

        test('Resident setup items should be available', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnResidentTypeSetup();
            await customerManagementPage.verifyResidentTypesSetupItems();
        });

        test('Social media setup items should be available', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnSocialMediaSetup();
            await customerManagementPage.verifySocialMediaSetupItems();
        });

        test('Title setup items should be available', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnTitleSetup();
            await customerManagementPage.verifyTitlesSetupItems();
        });
    });
    test.describe('Ownership Type CRUD', () => {
        test('should add ownership type successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnOwnershipTypeSetup();
            await customerManagementPage.addOwnershipType('Corporation');
            await customerManagementPage.assertSuccessToastDisplayed();
        });

        test('should edit ownership type successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnOwnershipTypeSetup();
            await customerManagementPage.editOwnershipType('LLC');
            await customerManagementPage.assertSuccessToastDisplayed();
        });

        test('should delete ownership type successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnOwnershipTypeSetup();
            await customerManagementPage.deleteOwnershipType();
            await customerManagementPage.assertSuccessToastDisplayed();
        });
    });

    test.describe('Social Media CRUD', () => {
        test('should add social media successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnSocialMediaSetup();
            await customerManagementPage.addSocialMedia('LinkedIn');
            await customerManagementPage.assertSuccessToastDisplayed();
        });
    
        test('should edit social media successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnSocialMediaSetup();
            await customerManagementPage.editSocialMedia('Facebook');
            await customerManagementPage.assertSuccessToastDisplayed();
        });
    
        test('should delete social media successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnSocialMediaSetup();
            await customerManagementPage.deleteSocialMedia();
            await customerManagementPage.assertSuccessToastDisplayed();
        });
    });
    
    test.describe('Title CRUD', () => {
        test('should add title successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnTitleSetup();
            await customerManagementPage.addTitle('Manager');
            await customerManagementPage.assertSuccessToastDisplayed();
        });
    
        test('should edit title successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnTitleSetup();
            await customerManagementPage.editTitle('Director');
            await customerManagementPage.assertSuccessToastDisplayed();
        });
    
        test('should delete title successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnTitleSetup();
            await customerManagementPage.deleteTitle();
            await customerManagementPage.assertSuccessToastDisplayed();
        });
    });
  
    test.describe('Nationality CRUD', () => {
        test('should add nationality successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnNationalitySetup();
            await customerManagementPage.addNationality('Canadian');
            await customerManagementPage.assertSuccessToastDisplayed();
        });
    
        test('should edit nationality successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnNationalitySetup();
            await customerManagementPage.editNationality('American');
            await customerManagementPage.assertSuccessToastDisplayed();
        });
    
        test('should delete nationality successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnNationalitySetup();
            await customerManagementPage.deleteNationality();
            await customerManagementPage.assertSuccessToastDisplayed();
        });
    });

    test.describe.serial('Gender CRUD', () => {
        test('should add gender successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnGenderSetup();
            await customerManagementPage.addGender('TestGender');
            await customerManagementPage.assertSuccessToastDisplayed();
        });

        test('should edit gender successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnGenderSetup();
            await customerManagementPage.editGender('TestGenderUpdated');
            await customerManagementPage.assertSuccessToastDisplayed();
        });

        test('should delete gender successfully', async ({customerManagementPage}) => {
            await customerManagementPage.clickOnGenderSetup();
            await customerManagementPage.deleteGender();
            await customerManagementPage.assertSuccessToastDisplayed();
        });
    });
    
        test.describe('Search Tests', () => {
            test('should search ownership type successfully', async ({customerManagementPage}) => {
                await customerManagementPage.clickOnOwnershipTypeSetup();
                await customerManagementPage.searchSetupItem('Corporation');
                await customerManagementPage.verifyOwnershipTypesSetupItems();
            });
    
            test('should search social media successfully', async ({customerManagementPage}) => {
                await customerManagementPage.clickOnSocialMediaSetup();
                await customerManagementPage.searchSetupItem('LinkedIn');
                await customerManagementPage.verifySocialMediaSetupItems();
            });
    
            test('should search title successfully', async ({customerManagementPage}) => {
                await customerManagementPage.clickOnTitleSetup();
                await customerManagementPage.searchSetupItem('Manager');
                await customerManagementPage.verifyTitlesSetupItems();
            });
    
            test('should search nationality successfully', async ({customerManagementPage}) => {
                await customerManagementPage.clickOnNationalitySetup();
                await customerManagementPage.searchSetupItem('Canadian');
                await customerManagementPage.verifyNationalitiesSetupItems();
            });
    
            test('should search gender successfully', async ({customerManagementPage}) => {
                await customerManagementPage.clickOnGenderSetup();
                await customerManagementPage.searchSetupItem('Male');
                await customerManagementPage.verifyGenderSetupItems();
            });
    
        });

    });