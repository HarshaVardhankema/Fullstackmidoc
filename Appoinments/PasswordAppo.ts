import { Page,Locator } from "@playwright/test";

export class PasswordAppo{

    Page : Page;
    Password : Locator;


    constructor(page){

        this.Page = page
        this.Password = page.locator('.chakra-input.css-1rsaweq');

    }
    async PasswordFeildbox(Password:string){
        await this.Password.fill(Password)
        await this.Password.press('Enter');


    }
}