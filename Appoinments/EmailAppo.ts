import { Locator, Page } from "@playwright/test";

export class EmailAppo{

    page : Page;
    email : Locator;
    continuebutt : Locator;




    constructor(page){

        this.page = page;
        this.email = page.locator('.chakra-input.css-dhzvz6');
        this.continuebutt = page.locator('.chakra-button.css-12kaf87');


    }
    async EmailFeildbox(Email:string){

        await this.page.goto('https://midoc-patientapp-dev.azurewebsites.net/login');
        await this.email.fill(Email);
        await this.continuebutt.click();







    }
}