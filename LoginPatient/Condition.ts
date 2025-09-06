import { Locator, Page } from "@playwright/test";


export class ConditionPage
{
    page : Page;
    condition : Locator;
    AddCondition : Locator;
    Namecondition : Locator;
    continuebutt : Locator;
    Calendar : Locator;
    year : Locator;
    Month : Locator;
    Day : Locator;
    AddsCondition : Locator;



    constructor(page: Page)
    {
        this.page = page;
        this.condition = page.locator('a[href="/conditions"]');
        this.AddCondition = page.getByRole('button',{name : 'Add Condition'});
        this.Namecondition = page.getByText('Anxiety Disorders', { exact: true });
        this.continuebutt = page.getByRole('button', { name: 'Continue' });
        this.Calendar = page.getByPlaceholder('Select a Date*');
        this.year = page.locator("[name='years']");
        this.Month = page.locator("[name='months']");
        this.Day =page.locator("[name='day']").nth(19);
        this.AddsCondition = page.locator('.chakra-button.css-zk5ooc').nth(1);




    }

    async conditions(year: any, Month: any, )
    {
        await this.condition.click();
        await this.AddCondition.click();
        await this.Namecondition.click();
        await this.continuebutt.click();
        await this.Calendar.click();
        await this.year.selectOption(year);
        await this.Month.selectOption(Month);
        await this.Day.click();
        await this.AddsCondition.click();      



    }
}