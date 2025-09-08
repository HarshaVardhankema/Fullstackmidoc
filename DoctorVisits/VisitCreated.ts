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
  SurgeryOverview: Locator;

  AddAllergy: Locator;
  AllergyName: Locator;
  AllergyContinue: Locator;
  Reaction: Locator;
  ReactionName: Locator;
  AddReaction: Locator;
  AllergyAddDocument: Locator;
  AllergyFileUploadInput: Locator;
  AddAllergyContinue: Locator;
  AllergyOverview: Locator;

  //SocialHistory 
  AddSocialHistory: Locator;
  dropdown: Locator;
  Items: Locator;
  Current: Locator;
  StartYear: Locator;
  Year: Locator;
  Drinks: Locator
  SocialHistoryOverview: Locator;

  // Vaccination 
  AddVaccine: Locator;
  VaccineName: Locator;
  VaccineContinue: Locator;
  VaccineAddDocument: Locator;
  VaccineFileUploadInput: Locator;
  AddVaccineButt: Locator;
  VaccinationOverview: Locator;

  // Medication 
  MedicationOverView: Locator;
  AddMedicationtabutton: Locator;
  AddMedication: Locator;
  MedicineName: Locator;
  Fetch: Locator;
  Strength: Locator;
  MedicineExpiry: Locator;
  MedicineYear: Locator;
  MedicineMonth: Locator;
  Frequency: Locator;
  Daily: Locator;
  FrequencyValue: Locator;
  FrequencyValueNum: Locator;
  PrescribedBy: Locator;
  MedicineHospitalName: Locator;
  MedicineCurrent: Locator;
  AddMedicationbutt: Locator;
  MedicationOverview: Locator;

















  constructor(page: any) {
    this.page = page;
    this.AddCondition = page.getByRole('button', { name: 'Add Condition' });
    this.AnxietyDisorder = page.locator('.chakra-checkbox__control.css-1fnocdi').nth(1);
    this.continue = page.locator('.chakra-button.css-dn6flb');
    this.AddConditions = page.locator('.chakra-button.css-dn6flb').nth(1);
    this.Overview = page.getByText("Overview").nth(1);

    // Surgeries 
    this.AddSurgery = page.getByRole('button', { name: 'Add Surgery' });
    this.SurgeryName = page.locator('.chakra-checkbox__control.css-1fnocdi').nth(1);
    this.continue = page.locator('.chakra-button.css-dn6flb');
    this.SurgeronName = page.locator('.chakra-input.css-oj3rkf').nth(1);
    this.HospitalName = page.locator('.chakra-input.css-1kjj4hm');
    this.AddSurgerybutt = page.locator('.chakra-button.css-dn6flb').nth(1);
    this.SurgeryOverview = page.getByText("Overview").nth(1);

    //  Allergies 
    this.AddAllergy = page.getByRole('button', { name: 'Add Allergy' });
    this.AllergyName = page.locator('.chakra-text.css-b2463j').nth(2);
    this.AllergyContinue = page.locator('.chakra-button.css-dn6flb');
    this.Reaction = page.locator('img[src="/assets/imgs/right-icon.png"]')
    this.ReactionName = page.locator('.chakra-text.css-b2463j').nth(78);
    this.AddReaction = page.locator('.chakra-button.css-dn6flb').nth(2);
    this.AddAllergyContinue = page.locator('.chakra-button.css-dn6flb').nth(1);
    this.AllergyOverview = page.getByText("Overview").nth(1);

    //  SocialHistory 
    // this.AddSocialHistory = page.getByRole('button', { name: 'Add Social' });
    // this.dropdown = page.locator('img[src="/assets/imgs/double-arrow.png"]')
    // this.Items = page.locator('.chakra-menu__menuitem.css-jax8ii').nth(7);
    // this.Current = page.getByText('Current');
    // this.StartYear = page.locator('img[src="/assets/imgs/double-arrow.png"]').nth(1);
    // this.Year = page.locator('.chakra-menu__menuitem.css-jax8ii').nth(13);
    // this.Drinks = page.locator('.chakra-input.css-huwrqk');
    // this.SocialHistoryOverview = page.getByText("Overview").nth(1);


    //Vaccine 
    this.AddVaccine = page.getByRole('button', { name: 'Add Vaccine' });
    this.VaccineName = page.locator('.chakra-text.css-3pk8di').nth(0);
    this.VaccineContinue = page.locator('.chakra-button.css-dn6flb');
    this.AddVaccineButt = page.locator('.chakra-button.css-dn6flb').nth(1);
    this.VaccinationOverview = page.getByText("Overview").nth(1);

    //Medication 
    //this.MedicationOverView = page.locator('img[src="/assets/svgs/arrow-icon.svg"]').nth(4);

    this.AddMedication = page.getByText("Add Medication");
    this.AddMedicationtabutton = page.getByRole('button', { name: 'Add Medication' });
    this.MedicineName = page.getByPlaceholder('Medicine name*');
    this.Fetch = page.getByRole('button', { name: 'Fetch' });
    this.Strength = page.locator('.chakra-input.css-1qyvit7');
    this.MedicineExpiry = page.locator('img[src*="double-arrow.png"]').nth(4);
    this.MedicineYear = page.locator('select[name="years"]');
    this.MedicineMonth = page.locator('select[name="months"]');
    this.Frequency = page.locator('img[src*="double-arrow.png"]').nth(5);
    this.Daily = page.locator('.chakra-menu__menuitem.css-jax8ii').nth(44);
    this.FrequencyValue = page.locator('img[src*="double-arrow.png"]').nth(6);
    this.FrequencyValueNum = page.locator('.chakra-menu__menuitem.css-jax8ii').nth(48);
    this.PrescribedBy = page.locator('.chakra-input.css-rlygj7');
    this.MedicineHospitalName = page.locator('.chakra-input.css-1kjj4hm');
    this.MedicineCurrent = page.locator('.chakra-checkbox__control.css-1fnocdi').nth(3);
    this.AddMedicationbutt = page.locator('.chakra-button.css-dn6flb');



















  }

  async PatientOverview(surgeronName: string, HospitalName: string, documentPath: string, MedicineName: string, Strength: string, PrescribedBy: string) {

    await this.AddCondition.click();
    await this.AnxietyDisorder.click();
    await this.continue.click();
    await this.AddConditions.click();
    await this.Overview.click({ timeout: 6000 });

    //  surgries 
    await this.AddSurgery.click();
    await this.SurgeryName.click();
    await this.continue.click();
    await this.SurgeronName.fill(surgeronName);
    await this.HospitalName.fill(HospitalName);
    await this.AddSurgerybutt.click();
    await this.SurgeryOverview.click({ timeout: 6000 });

    //   Allergies 
    await this.AddAllergy.click();
    await this.AllergyName.click();
    await this.AllergyContinue.click();
    await this.Reaction.click();
    await this.ReactionName.click();
    await this.AddReaction.click();
    await this.AddAllergyContinue.click();
    await this.AllergyOverview.click({ timeout: 6000 });


    // Social History 

    // await this.AddSocialHistory.click();
    // await this.dropdown.click();
    // await this.Items.click();
    // await this.Current.check();
    // await this.StartYear.click();
    // await this.Year.click();
    // await this.Drinks.fill("12")
    // await this.AddSocialHistory.click();
    // await this.SocialHistoryOverview.click({timeout:6000})

    //  Vaccination 
    await this.AddVaccine.click();
    await this.VaccineName.click();
    await this.VaccineContinue.click();
    await this.AddVaccineButt.click();
    await this.VaccinationOverview.click({ timeout: 6000 });

    //Medication 
    //await this.MedicationOverView.click();
    await this.AddMedication.click();
    await this.AddMedicationtabutton.click();
    await this.MedicineName.fill(MedicineName);
    await this.Fetch.click();
    await this.Strength.fill(Strength);
    await this.MedicineExpiry.click();
    await this.MedicineYear.click();
    await this.MedicineMonth.click();
    await this.Frequency.click();
    await this.Daily.click();
    await this.FrequencyValue.click();
    await this.FrequencyValueNum.click();
    await this.PrescribedBy.fill(PrescribedBy);
    await this.MedicineHospitalName.fill(HospitalName);
    await this.MedicineCurrent.check();
    await this.AddMedicationbutt.click();
    // await this.MedicationOverview.click({timeout:6000});








  }
}