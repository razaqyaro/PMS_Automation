import {test, expect} from '../../testFixtures/testFixtures';
import {TestData} from "../../test-data/testData";

test.describe("MIS Admin Login Tests", () => {
    test("Login with valid credentials", async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.fillEmailPhoneNumber(TestData.MIS_ADMIN_USER_NAME);
        await loginPage.fillPassword(TestData.MIS_ADMIN_USER_PASSWORD);
        await loginPage.clickLoginButton();
        await expect(loginPage.page).toHaveURL(/home/);
    });

    test("Login with invalid credentials", async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.fillEmailPhoneNumber(TestData.MIS_ADMIN_USER_NAME);
        await loginPage.fillPassword(TestData.INVALID_PASSWORD);
        await loginPage.clickLoginButton();
        expect(await loginPage.getErrorMessage(), "Error message wrong").toContain(TestData.INVALID_LOGIN_CREDENTIALS_ERROR_MESSAGE);
    });

    test("Login with empty fields", async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.clickLoginButton();
        expect(await loginPage.getEmptyEmailPhoneNumberErrorMessage(), "Error message wrong").toContain(TestData.EMPTY_EMAIL_LOGIN_FIELD_ERROR_MESSAGE);
        expect(await loginPage.getEmptyPasswordErrorMessage(), "Error message wrong").toContain(TestData.EMPTY_PASSWORD_LOGIN_FIELD_ERROR_MESSAGE);
    });

    test("Login with only username filled", async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.fillEmailPhoneNumber(TestData.MIS_ADMIN_USER_NAME);
        await loginPage.clickLoginButton();
        expect(await loginPage.getEmptyEmailPhoneNumberErrorMessage()).toContain(TestData.EMPTY_PASSWORD_LOGIN_FIELD_ERROR_MESSAGE);
    });

    test("Login with only password filled", async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.fillPassword(TestData.MIS_ADMIN_USER_PASSWORD);
        await loginPage.clickLoginButton();
        expect(await loginPage.getEmptyEmailPhoneNumberErrorMessage(), "Error message wrong").toContain(TestData.EMPTY_EMAIL_LOGIN_FIELD_ERROR_MESSAGE);
    });

    test("Login with special characters in username", async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.fillEmailPhoneNumber(TestData.SPECIAL_CHARACTERS);
        await loginPage.fillPassword(TestData.MIS_ADMIN_USER_PASSWORD);
        await loginPage.clickLoginButton();
        expect(await loginPage.getEmptyEmailPhoneNumberErrorMessage(), "Error message wrong").toContain(TestData.INVALID_EMAIL_PHONE_NUMBER_ERROR_MESSAGE);
    });

});