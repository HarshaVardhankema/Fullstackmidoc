import { Locator, Page } from "@playwright/test";
import { addAbortListener } from "events";

export class Allergies
{
    page: Page;
    Allergies : Locator;
    AddAllergie : Locator;
    NameofAllergie : Locator;
    continue : Locator;
    Calendar :Locator;
    year:Locator;
    Month : Locator;
    Reaction :Locator;
    ReactionName:Locator;
    AddReaction : Locator;
    AddDocument : Locator;
    FileUploadInput : Locator;
    FinalStep : Locator;

    constructor(page:any)
    {
        this.page = page;
        this.Allergies = page.locator('a[href="/allergies"]');
        this.AddAllergie = page.getByRole('button', { name: 'Add Allergy' });
        this.NameofAllergie = page.getByText('Actinic Prurigo', { exact: true });
        this.continue = page.locator('.chakra-button.css-zk5ooc');
        this.Calendar = page.getByPlaceholder('Date*');
        this.year = page.locator("[name ='years']")
        this.Month = page.locator("[name='day']").first();
        this.Reaction = page.locator('img[src="/assets/imgs/right-icon.png"]');
        this.ReactionName = page.getByText('Abdominal Pain',{ exact: true });
        this.AddReaction = page.getByText('Add reactions',{ exact: true });
        this.AddDocument = page.locator('img[src="/assets/imgs/add-blue.png"]');
        this.FileUploadInput = page.locator('input[type="file"]'); 
        this.FinalStep = page.locator('.chakra-button.css-zk5ooc').nth(1);

    }

    async AllergiesData(documentPath:string)
    {

        await this.Allergies.click();
        await this.AddAllergie.click();
        await this.NameofAllergie.click();
        await this.continue.click();
        await this.Calendar.click();
        await this.year.selectOption('2008')
        await this.Month.click();
        await this.Reaction.click();
        await this.ReactionName.click();
        await this.AddReaction.click();
        await this.FileUploadInput.setInputFiles(documentPath);
        await this.FinalStep.click();

        
    }
}
