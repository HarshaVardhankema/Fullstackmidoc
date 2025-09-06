import { Page, expect, Locator } from "@playwright/test";

export class Continue {

    page: Page;
    continuebutt: Locator;

    constructor(page: any) {
        this.page = page;
        this.continuebutt = page.locator("[class='css-0'] .chakra-button.css-zk5ooc");

    }

    async Continuebutton() {
        
        await this.continuebutt.waitFor();
        await this.continuebutt.click();
        await expect(this.continuebutt).toBeVisible();
        await expect(this.page).toHaveURL("https://midoc-patientapp-dev.azurewebsites.net/home");
         await this.page.pause();

    }

}