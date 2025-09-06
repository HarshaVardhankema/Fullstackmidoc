import { Locator, Page } from "@playwright/test";

export class DashboardAppo {
  readonly page: Page;
  readonly Cardio: Locator;

  constructor(page: Page) {
    this.page = page;
    this.Cardio = page.locator(
      'img[src="https://midocfileserverdev.blob.core.windows.net/midocdev/29787a76-246b-4f71-b0d5-f4a6494db935.png"]'
    );
  }

  async findDoctor() {
    await this.Cardio.click();
  }
}
