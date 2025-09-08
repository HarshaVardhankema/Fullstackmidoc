import { Locator, Page } from "@playwright/test";

export class VisitAddMedicine {

    page: Page;
    AddMedicine: Locator;
    Medicine: Locator;
    Fetch: Locator;
    Strength: Locator;
    Frequency: Locator;
    Daily: Locator;
    Valuee: Locator;
    Value: Locator;
    Saveprescription: Locator;
    XButt : Locator;
    SaveExit : Locator;
    EndVisit :Locator;

    constructor(page: any) {

        this.page = page;
        this.AddMedicine = page.getByRole('button', { name: '+ Add medicine' });
        this.Medicine = page.locator('.chakra-input.css-oj3rkf').first();
        this.Fetch = page.getByText('Fetch');
        this.Strength = page.getByLabel('Strength');
        this.Frequency = page.locator('img[src="/assets/imgs/double-arrow.png"]').nth(6);
        this.Daily = page.locator('.chakra-menu__menuitem.css-jax8ii').nth(38);
        this.Valuee = page.locator('img[src="/assets/imgs/double-arrow.png"]').nth(7);
        this.Value = page.locator('.chakra-menu__menuitem.css-jax8ii').nth(42);
        this.Saveprescription = page.locator('.chakra-button.css-1vgrw4m');
        this.XButt = page.locator('svg.chakra-icon.css-onkibi').nth(2);
        this.SaveExit = page.getByRole('button', { name: 'Save & Exit' });
        this.EndVisit = page.getByText('End/pause Visit');







    }

    async AddMedicin(Strength: string) {
        await this.AddMedicine.click();
        await this.Medicine.fill("Dolo650");
        await this.Fetch.click({ timeout: 3000 });
        await this.Strength.fill(Strength);
        await this.Frequency.click();
        await this.Daily.click();
        await this.Valuee.click();
        await this.Value.click();
        await this.Saveprescription.click();
        await this.XButt.click();
        await this.SaveExit.click();
        await this.EndVisit.click();


    }
}