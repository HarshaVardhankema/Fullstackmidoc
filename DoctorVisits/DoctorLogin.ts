import { Locator, Page } from "@playwright/test";

export class DoctorLogin {
  page: Page;
  emailField: Locator;
  passwordField: Locator;
  continueButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Define locators
    this.emailField = page.locator('.chakra-input.css-rlygj7').first();
    this.passwordField = page.locator('.chakra-input.css-efg1n9').first();
    this.continueButton = page.locator('.chakra-button.css-1gt1si2').first();
  }

  async login(email: string, password: string) {


   await this.page.goto('https://midoc-provider-dev.azurewebsites.net/login')
    

    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.continueButton.click();
  }
}
