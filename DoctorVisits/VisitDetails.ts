import { expect, Locator, Page } from "@playwright/test";

export class VisitDetails {

    page : Page;
    AcceptVisit : Locator;
    StartCall : Locator;
    ConfirmStartCall : Locator;


    constructor(page:any)
    {
        this.page = page; 
        this.AcceptVisit = page.getByRole('button', { name: 'Accept visit' })
        this.StartCall = page.getByRole('button', {name:'Start call'})
        this.ConfirmStartCall = page.locator('.chakra-button.css-dn6flb').nth(1);



    }

    async VisitDetail(){

        await this.AcceptVisit.click();
        await this.StartCall.click();
        await this.ConfirmStartCall.click();
        


    }

}