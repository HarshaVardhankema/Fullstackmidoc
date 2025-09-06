import { Page,Locator } from "@playwright/test";

export class Email 
{
    page:Page
    email :Locator;
    continuebutt:Locator;


    constructor(page: Page)
    {
        this.page = page;
        this.email = page.locator('.chakra-input.css-dhzvz6');
        this.continuebutt = page.locator('.chakra-button.css-12kaf87');
        
    }

    async NewEmail(email:string)
    {

        await this.page.goto("https://midoc-patientapp-dev.azurewebsites.net/login");
         await this.email.fill(email);
        await this.continuebutt.click();
        
    }
}