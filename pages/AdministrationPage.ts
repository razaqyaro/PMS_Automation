import { Locator, Page } from "@playwright/test";
import { step } from "allure-js-commons";

export class AdministrationPage {
    readonly page: Page;
    readonly searchInputField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInputField = page.locator("input[placeholder='Search by name']");

    }
}