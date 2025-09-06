import { Locator, Page } from "@playwright/test";

export class BookingSuccessful {

    page : Page; 
    continue : Locator;


    constructor(page)

{

    this.page = page;
    this.continue = page.getByRole('button', { name: 'Continue' });


}
async BookingCompleted()

{
    await this.continue.click();
}
}


