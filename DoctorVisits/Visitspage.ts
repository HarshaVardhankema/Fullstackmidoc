import { Locator, Page } from "@playwright/test";

export class VisitsPage {

    page: Page;
    appointments: Locator;
    dropdown : Locator;
    Month : Locator;
    Pending : Locator;
    Patient : Locator;

    constructor(page: any) {
        this.appointments = page.getByRole("link", { name: "Visits" });
        this.dropdown = page.locator('select');
        this.Pending = page.getByText('Pending');
        this.Patient = page.getByText('Ben Stock').first()

       


       
        

    }

    async AppoVisits() {
        await this.appointments.click();      
        await this.dropdown.selectOption('dayGridMonth');
        await this.Pending.click();
        await this.Patient.click();
      


    }
}