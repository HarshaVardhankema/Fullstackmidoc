import { expect, Locator, Page } from "@playwright/test";

export class Dashboard {
    page: Page;
    MyHealth: Locator;

    constructor(page: Page) {
        this.page = page;
        this.MyHealth = this.page.locator('a[href="/myhealth"]');
    }

    async clickMyHealth() {
       
       // await expect(this.MyHealth).toBeVisible({ timeout: 5000 });        
        await this.MyHealth.waitFor({ state: 'visible' });        
        await this.MyHealth.click();        
        await expect(this.page).toHaveURL(/\/myhealth$/);
    }
}
