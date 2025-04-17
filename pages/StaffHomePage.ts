import {Locator, Page} from "@playwright/test";

export class StaffHomePage {
  readonly page: Page;
  readonly accountSettingsDropdown: Locator;
  readonly administrationMenu: Locator;
  readonly customerAccountsMenu: Locator;
  readonly staffMenu: Locator;
  readonly userAndRolesMenu: Locator;


  constructor(page: Page) {
    this.page = page;
    this.accountSettingsDropdown = page.locator("div [class='relative cursor-pointer']");
    this.administrationMenu = this.page.locator('span', { hasText: 'Administration' });
    this.customerAccountsMenu = this.page.getByText('Customer Accounts');
    this.staffMenu = this.page.locator("section > div .text-xs.font-medium", { hasText: "Staff" });
    this.userAndRolesMenu = this.page.locator("section > div .text-xs.font-medium", { hasText: "Users & Roles" });
    
  }
}