import { Locator, Page } from "@playwright/test";

export class Medications{
    page : Page;
    Medication : Locator;
    AddMedicine : Locator;
    MedicineName : Locator;
    Fetch :Locator;
    Dosage : Locator;
    Frequency : Locator
    consumption : Locator;
    Expiry : Locator;
    ExpiryYear : Locator;
    MoringCheckbox : Locator;
    AfterFoodCheckbox : Locator;
    PrescribedBy : Locator;
    HospitalName : Locator;
    Current : Locator;
    AddMedication:Locator;






    constructor(page:Page)
    {
        this.page = page;
        this.Medication = page.locator('a[href="/medications"]');
        this.AddMedicine = page.getByRole('button',{name:'Add Medication'});
        this.MedicineName = page.getByPlaceholder('Medicine name*');
        this.Fetch = page.getByRole('button',{name:'Fetch'});
        this.Dosage = page.locator('.chakra-input.css-wk9h3d');
        this.Frequency = page.locator('.chakra-input.css-wr6uy9');
        this.consumption = page.getByRole('menuitem', { name: '4' });
        this.Expiry = page.getByPlaceholder('Medicine Expiry');
        this.ExpiryYear = page.locator('[name="years"]');
        this.MoringCheckbox = page.locator('.chakra-checkbox__control.css-1fnocdi').nth(0);
        this.AfterFoodCheckbox = page.locator('.chakra-checkbox__control.css-1fnocdi').nth(4);
        this.PrescribedBy = page.locator('.chakra-input.css-dhzvz6');
        this.HospitalName = page.locator('.chakra-input.css-121oy8e');
        this.Current = page.locator('.chakra-checkbox__control.css-1fnocdi').nth(5);
        this.AddMedication = page.locator('.chakra-button.css-zk5ooc');

        




    }

    async Tablets(MedicineName: string, Dosage: string, dataindex: any, PrescribedBy: string, HospitalName: string)
    {

        await this.Medication.click();
        await this.AddMedicine.click();
        await this.MedicineName.fill(MedicineName);
        await this.Fetch.click();
        await this.Dosage.fill(Dosage);
        await this.Frequency.waitFor({state:'visible'});
        await this.Frequency.click();
        await this.consumption.click();
        await this.Expiry.click();
        await this.ExpiryYear.selectOption({value:'2028'});
        await this.MoringCheckbox.check();
        await this.AfterFoodCheckbox.check();
        await this.PrescribedBy.fill(PrescribedBy);
        await this.HospitalName.fill(HospitalName);
        await this.Current.check();
        await this.AddMedication.click();




        



    }
}