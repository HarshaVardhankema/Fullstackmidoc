import { Locator, Page } from "@playwright/test";

export class DoctorEmail 
{

    page : Page;
    DocEmail : Locator;
    DocPassword : Locator;
    continue : Locator;


    constructor(page:any)
    {
        this.page = page; 
        this.DocEmail = page.locator('.chakra-input.css-rlygj7').first();
        this.DocPassword = page.locator('.chakra-input.css-efg1n9').first();
        this.continue =page.locator('.chakra-button.css-1gt1si2').first();
    }

     async DoctorLogin(DocEmail:string, DocPassword:string) {

        await this.DocEmail.fill(DocEmail);
        await this.DocPassword.fill(DocPassword);
        await this.continue.click();
     }
}