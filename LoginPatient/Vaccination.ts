import { Locator, Page } from "@playwright/test";

export class Vacccination {

    page: Page;
    vaccination: Locator;
    AddVaccine: Locator;
    Covid: Locator;
    Continue: Locator;
    AdminDate: Locator;
    Year: Locator;
    month: Locator;
    Day: Locator;

    DueDate : Locator;
    DueYear : Locator;
    DueMonth : Locator;
    DueDay : Locator;




    constructor(page) {

        this.page = page;
        this.vaccination = page.locator('a[href="/vaccination"]');
        this.AddVaccine = page.locator('.chakra-button.css-15i9xzt').first();
        this.Covid = page.getByText('COVID-19');
        this.Continue = page.locator('.chakra-button.css-zk5ooc');

        this.AdminDate = page.getByPlaceholder('Admin Date*');
        this.Year = page.locator("select[name='years']")
        this.month = page.locator("select[name='months']");
        this.Day = page.locator("button[name='day']").nth(1);

        this.DueDate = page.getByPlaceholder('Due Date');
        this.DueYear = page.locator("select[name='years']")
        this.DueMonth = page.locator("select[name='months']");
        this.DueDay = page.locator("button[name='day']").nth(1);








    }

    async Vacci() {

        await this.vaccination.click();
        await this.AddVaccine.click();
        await this.Covid.click();
        await this.Continue.click();
        await this.AdminDate.click();
        await this.Year.selectOption('2020');
        await this.month.selectOption('August');
        await this.Day.click();

        await this.DueDate.click();
        await this.DueYear.selectOption('2026');
        await this.DueMonth.selectOption('August');
        await this.Day.click();





    }
}