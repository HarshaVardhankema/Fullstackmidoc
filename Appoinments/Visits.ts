import { Locator, Page } from "@playwright/test";


export class Visit {
    
    page : Page;
    appointments : Locator;
    

  constructor(page) {
    this.page = page;

    // Better locator: target the div that has both img + text
    this.appointments = page.getByRole("link", { name: "Visits" });
  }

  async StartVisit() {
  
 await this.appointments.click();
    await this.page.waitForURL("**/visits", { timeout: 20000 });
}

}


