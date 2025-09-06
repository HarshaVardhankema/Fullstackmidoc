import { Locator, Page } from "@playwright/test";

export class Passwordlogin
{
    page : Page;
    Password : Locator;
    

    constructor(page){

        this.page =page;
        this.Password = page.locator('.chakra-input.css-1rsaweq');
      


    }
    async PasswordFeildbox(Password:string)
    {
        await this.Password.fill(Password)
        await this.Password.press('Enter');
    }
}