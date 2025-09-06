import { expect, Locator, Page } from "@playwright/test";

export class MyHealth
{
    page:Page;
    vitals : Locator;

    constructor(page:Page)
    {
        this.page= page;
        this.vitals = page.locator('a[href="/vitals"]');


    }
    async Vitalss()
    {
        await this.vitals.click();
        expect(this.page).toHaveURL('https://midoc-patientapp-dev.azurewebsites.net/vitals');

    }
}