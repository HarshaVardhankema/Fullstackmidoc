import { Locator, Page } from "@playwright/test";

export class VisitCreated {

    page: Page;
    PatientOveriew: Locator;
    AddCondition: Locator;
    AnxietyDisorder: Locator;
    continue: Locator;
    AddConditions: Locator;
    Overview: Locator;

    AddSurgery: Locator;
    SurgeryName: Locator;
    SurgeronName: Locator;
    HospitalName: Locator;
    AddDocument: Locator;
    FileUploadInput: Locator;
    AddSurgerybutt: Locator;

    AddAllergy: Locator;
    AllergyName: Locator;
    AllergyContinue: Locator;
    Reaction: Locator;
    ReactionName: Locator;
    AddReaction: Locator;
    AllergyAddDocument: Locator;
    AllergyFileUploadInput: Locator;
    AddAllergyContinue: Locator;

    //SocialHistory 
    AddSocialHistory: Locator;
    dropdown: Locator;
    Items: Locator;
    Current: Locator;
    StartYear: Locator;
    Year: Locator;
    Drinks: Locator

    // 














    constructor(page: any) {
        this.page = page;
        // this.AddCondition = page.getByRole('button', { name: 'Add Condition' });
        // this.AnxietyDisorder = page.locator('.chakra-checkbox__control.css-1fnocdi').nth(1);
        // this.continue = page.locator('.chakra-button.css-dn6flb');
        // this.AddConditions = page.locator('.chakra-button.css-dn6flb').nth(1);
        // this.Overview = page.getByText("Overview").nth(1);

        // Surgeries 
        // this.AddSurgery = page.getByRole('button', { name: 'Add Surgery' });
        // this.SurgeryName = page.locator('.chakra-checkbox__control.css-1fnocdi').nth(1);
        // this.continue = page.locator('.chakra-button.css-dn6flb');
        // this.SurgeronName = page.locator('.chakra-input.css-oj3rkf').nth(1);
        // this.HospitalName = page.locator('.chakra-input.css-1kjj4hm');
        // this.AddDocument = page.locator('button.css-vek1gi');
        // this.FileUploadInput = page.locator('input[type="file"]');
        // this.AddSurgerybutt = page.locator('.chakra-button.css-dn6flb').nth(1);
        // this.Overview = page.getByText("Overview").nth(1);

        //Allergies 
        // this.AddAllergy = page.getByRole('button', { name: 'Add Allergy' });
        // this.AllergyName = page.locator('.chakra-text.css-b2463j').nth(2);
        // this.AllergyContinue = page.locator('.chakra-button.css-dn6flb');
        // this.Reaction = page.locator('img[src="/assets/imgs/right-icon.png"]')
        // this.ReactionName = page.locator('.chakra-text.css-b2463j').nth(78);
        // this.AddReaction = page.locator('.chakra-button.css-dn6flb').nth(2);
        // this.AllergyAddDocument = page.locator('button.css-vek1gi');
        // this.AllergyFileUploadInput = page.locator('input[type="file"]');
        // this.AddAllergyContinue = page.locator('.chakra-button.css-dn6flb').nth(1);

        //SocialHistory 
        this.AddSocialHistory = page.getByRole('button', { name: 'Add Social' });
        this.dropdown = page.locator('img[src="/assets/imgs/double-arrow.png"]')
        this.Items = page.locator('.chakra-menu__menuitem.css-jax8ii').nth(8);
        this.Current = page.getByText('Current');
        this.StartYear = page.locator('img[src="/assets/imgs/double-arrow.png"]').nth(1);
        this.Year = page.locator('.chakra-menu__menuitem.css-jax8ii').nth(13);
        this.Drinks = page.locator('.chakra-input.css-huwrqk');






    }

    async PatientOverview(surgeronName: string, HospitalName: string, documentPath: string) {

        // await this.AddCondition.click();
        // await this.AnxietyDisorder.click();
        // await this.continue.click();
        // await this.AddConditions.click();
        // await this.Overview.click();

        //surgries 
        // await this.AddSurgery.click();
        // await this.SurgeryName.click();
        // await this.continue.click();
        // await this.SurgeronName.fill(surgeronName);
        // await this.HospitalName.fill(HospitalName);
        // await this.AddDocument.click();
        // await this.FileUploadInput.setInputFiles(documentPath);
        // await this.AddSurgerybutt.click();
        // await this.Overview.click();

        //Allergies 
        // await this.AddAllergy.click();
        // await this.AllergyName.click();
        // await this.AllergyContinue.click();
        // await this.Reaction.click();
        // await this.ReactionName.click();
        // await this.AddReaction.click();
        // await this.AllergyAddDocument.click();
        // await this.AllergyFileUploadInput.setInputFiles(documentPath)
        // await this.AddAllergyContinue.click();


        // Social History 

        await this.AddSocialHistory.click();
        await this.dropdown.click();
        await this.Items.click();
        await this.Current.check();
        await this.StartYear.click();
        await this.Year.click();
        await this.Drinks.fill("12")
        await this.AddSocialHistory.click();






    }
}