// fixtures/pageObjects.ts
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import {AdministrationPage} from "../pages/AdministrationPage";
import {CreateAccountPage} from "../pages/CreateAccountPage";
import {ForgotPasswordPage} from "../pages/ForgotPasswordPage";
import {StaffHomePage} from "../pages/StaffHomePage";


type pageFixtures = {
    loginPage: LoginPage;
    administrationPage: AdministrationPage;
    createAccountPage: CreateAccountPage;
    forgotPasswordPage: ForgotPasswordPage;
    staffHomePage: StaffHomePage;

};

export const test = base.extend<pageFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    administrationPage: async ({ page }, use) => {
        await use(new AdministrationPage(page));
   },
    createAccountPage: async ({ page }, use) => {
        await use(new CreateAccountPage(page));
    },
    forgotPasswordPage: async ({ page }, use) => {
        await use(new ForgotPasswordPage(page));
    },
    staffHomePage: async ({ page }, use) => {
        await use(new StaffHomePage(page));
    }

});

export { expect } from '@playwright/test';
