import { Locator, Page, expect } from "@playwright/test";
import path from "path";

export class Surgeries {
    page: Page;
    surgeries: Locator;
    Addsurgeries: Locator;
    Colectomy: Locator;
    continuebutt: Locator;
    surgeoname: Locator;
    HospitalName: Locator;
    AddDocument: Locator;
    FileUploadInput: Locator;
    Addsurgerybutt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.surgeries = page.locator('a[href="/surgeries"]');
        this.Addsurgeries = page.getByRole('button', { name: 'Add Surgery' });
        this.Colectomy = page.getByText('Colectomy', { exact: true });
        this.continuebutt = page.getByRole('button', { name: 'Continue' });
        this.surgeoname = page.locator('.chakra-input.css-s5ecup').nth(1);
        this.HospitalName = page.locator('.chakra-input.css-121oy8e');
        this.AddDocument = page.locator('button.css-vek1gi');
        this.FileUploadInput = page.locator('input[type="file"]');  // actual file input
        this.Addsurgerybutt = page.locator('.chakra-button.css-zk5ooc').nth(1);
    }

    async Surgeriesdata(surgeoname: string, HospitalName: string, documentPath: string) {
        await this.surgeries.click();
        await this.Addsurgeries.click();
        await this.Colectomy.click();
        await this.continuebutt.click();
        await this.surgeoname.fill(surgeoname);
        await this.HospitalName.fill(HospitalName);

        // Make sure input is interactable
        await this.AddDocument.click();
        await this.FileUploadInput.setInputFiles(documentPath); // upload file
        await this.Addsurgerybutt.click();
    }
}
