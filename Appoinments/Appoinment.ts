import { Locator, Page } from "@playwright/test";

export class Appoinment {

    page : Page;
    searchBtn : Locator;
    searchDoctor : Locator;
    BookAppoi : Locator;
    Date : Locator;
    continue : Locator;
    timeslot : Locator;
    Chiefcomplaint : Locator;
    confirmBooking : Locator;
    cash : Locator;


    constructor(page:any){

         this.searchBtn = page.locator('button.css-1uddaj').filter({ has: page.locator('img[src="/assets/imgs/search.png"]') });
        this.searchDoctor = page.locator('.chakra-input.css-xvhf0p');
        this.BookAppoi = page.locator('img[src="/assets/imgs/right-blue-arrow.png"]').first();
        this.Date = page.getByText('6').nth(1);
        this.continue = page.locator(".chakra-button.css-k6gnbm");
        this.timeslot = page.getByText('11:40');
        this.Chiefcomplaint = page.getByPlaceholder('Chief complaint');
        this.confirmBooking = page.locator(".chakra-button.css-k6gnbm");
        this.cash = page.getByRole('button', { name: 'Cash $50.00' }).first();
    }

    async BookingAppo(){

        await this.searchBtn.click();
        await this.searchDoctor.fill('Highlander');
        await this.searchDoctor.press('Enter');
        await this.BookAppoi.click();
        await this.Date.click();
        await this.continue.click({timeout : 10000});
        await this.timeslot.click();
        await this.Chiefcomplaint.fill("fever");
        await this.confirmBooking.click();
        await this.cash.click();
        
    }
}