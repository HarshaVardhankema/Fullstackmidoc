import { Locator, Page } from "@playwright/test";

export class SocialHistory {

    page : Page;
    SocialHistory : Locator;
    AddSocialButton : Locator;
    Dropdown : Locator;
    Items : Locator;
    Current : Locator;
    StartYear : Locator;
    Year : Locator;
    Drinks : Locator
    AddSocialHistory : Locator;







    constructor(page){

        this.page = page;
        this.SocialHistory = page.locator('a[href="/socialhistory"]');
        this.AddSocialButton = page.locator('.chakra-button.css-15i9xzt').first();
        this.Dropdown = page.locator('img[src="/assets/imgs/double-arrow.png"]');
        this.Items = page.locator('.chakra-menu__menuitem.css-18esm8n').first();
        this.Current = page.getByText('Current');
        this. StartYear = page.locator('img[src="/assets/imgs/double-arrow.png"]').nth(1);
        this.Year = page.locator('.chakra-menu__menuitem.css-18esm8n').nth(10);
        this.Drinks = page.locator('.chakra-input.css-12iacnc');
        this.AddSocialHistory =  page.locator('.chakra-button.css-zk5ooc');





    }

    async SocialData(){

        await this.SocialHistory.click();
        await this.AddSocialButton.click();
        await this.Dropdown.click();
        await this.Items.click();
        await this.Current.check();
        await this.StartYear.click();
        await this.Year.click();
        await this.Drinks.fill("12")
        await this.AddSocialHistory.click();






    }

}