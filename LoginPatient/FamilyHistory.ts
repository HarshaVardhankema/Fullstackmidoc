import { Locator, Page } from "@playwright/test";


export class FamilyHistory {
    page: Page;
    FamilyHistory: Locator;
    AddFamily: Locator;
    FirstName: Locator;
    LastName: Locator;
    Gender: Locator;
    Female: Locator;
    Weight: Locator;
    Feets: Locator;
    Inches: Locator;
    Height: Locator;
    DOB: Locator;
    year: Locator;
    Month: Locator;
    Day: Locator;
    Realtionship: Locator;
    Wife: Locator;
    MobileNo: Locator;
    EmailID: Locator;
    BloodType: Locator;
    AB: Locator;
    MartialSattaus: Locator
    Single: Locator;
    MedicalCondiion: Locator;
    Conditios: Locator;
    ContinueCondition: Locator;
    Allergies: Locator;
    ReactionName: Locator;
    AllergyContinue: Locator;
    AddMember: Locator;




    constructor(page: any) {
        this.page = page;
        this.FamilyHistory = page.locator('a[href="/familyhistory"]');
        this.AddFamily = page.locator('.chakra-button.css-15i9xzt')
        this.FirstName = page.locator(".chakra-input.css-dhzvz6");
        this.LastName = page.locator(".chakra-input.css-s5ecup").first();

        this.Gender = page.locator('.chakra-input.css-1qyemv2').first();
        this.Female = page.locator('.chakra-menu__menuitem.css-18esm8n').nth(1);
        this.Weight = page.locator("#weight").first();
        this.Feets = page.locator("#height").first();
        this.Inches = page.locator("#height").nth(1);
        this.DOB = page.getByPlaceholder("Date of Birth*").first();

       // this.year = page.locator("[name='years']").first();
       // this.Month = page.locator("[name='months']").first();
        this.Day = page.locator("[name='day']").nth(1); // safer, will pick by label

        this.Realtionship = page.locator('img[src="/assets/imgs/double-arrow.png"]').nth(5);
        this.Wife = page.getByText('Wife');
        this.MobileNo = page.getByPlaceholder("Phone number").first();
        this.EmailID = page.locator("//input[@type='email']")
        this.BloodType = page.locator('img[src="/assets/imgs/double-arrow.png"]').nth(6);
        this.AB = page.getByRole('menuitem', { name: 'AB+' })
        this.MartialSattaus = page.locator('img[src="/assets/imgs/double-arrow.png"]').nth(7);
        this.Single = page.getByRole('menuitem', { name: 'Single' })
        this.MedicalCondiion = page.locator('img[src="/assets/imgs/right-icon.png"]').first();
        this.Conditios = page.getByText('Anxiety Disorders', { exact: true });
        this.ContinueCondition = page.getByRole('button', { name: 'Continue' });
      //  this.Allergies = page.getByRole('button', { name: 'Allergies' });
      //  this.ReactionName = page.getByText("[class='css-3qzxkx'] div[class='css-70qvj9'] p.chakra-text.css-b2463j");
      //  this.AllergyContinue = page.locator("//button[text()='Continue']");
        this.AddMember = page.getByRole('button', { name: 'Add Member' }).last();




    }

    async FamilyData(FirstName: string, LastName: string, Weight: string, Feet: string, Inches: string, MobileNo: string, EmailID: string, year: string, month: string,day:string) {

        await this.FamilyHistory.click();
        await this.AddFamily.click();
        await this.FirstName.fill(FirstName);
        await this.LastName.fill(LastName);
        await this.Gender.click();
        await this.Female.click();
        await this.Weight.fill(Weight);
        await this.Feets.fill(Feet);
        await this.Inches.fill(Inches);
        await this.DOB.click();

     // ✅ Select year (must be string, e.g. "2002")
 // await this.year.selectOption(year);

  // ✅ Select month by visible label (e.g. "August")
//  await this.Month.selectOption({ label: month });

  // ✅ Select day by string (e.g. "15")
  await this.Day.click();


        await this.Realtionship.click();
        await this.Wife.click();
        await this.MobileNo.fill(MobileNo);
        await this.EmailID.fill(EmailID);
        await this.BloodType.click();
        await this.AB.click();
        await this.MartialSattaus.click();
        await this.Single.click();
        await this.MedicalCondiion.click();
        await this.Conditios.click();
        await this.ContinueCondition.click();
       // await this.Allergies.click();
       // await this.ReactionName.click();
        await this.AddMember.click();
    }
}