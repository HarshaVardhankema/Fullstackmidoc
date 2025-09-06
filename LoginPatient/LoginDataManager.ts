import { Locator, Page } from "@playwright/test";
import { Emailogin } from "./Emailogin";
import { Email } from "../SignInPatient/Email";
import { Passwordlogin } from "./Passwordlogin";
import { Dashboard } from "./Dashboard";
import { MyHealth } from "./MyHealth";
import { Vitals } from "./Vitals";
import { ConditionPage } from "./Condition";
import { Surgeries } from "./Surgeries";
import { Medications } from "./Medication";
import { Allergies } from "./Allergies";
import { FamilyHistory } from "./FamilyHistory";
import { Vacccination } from "./Vaccination";
import { SocialHistory } from "./SocialHistory";

export class LoginDataManager{

    page : Page;
    emailogin : Emailogin
    Password : Passwordlogin;
    Dashboard : Dashboard;
    MyHealth : MyHealth;
    Vitals : Vitals;
    Condition : ConditionPage;
    Surgeries : Surgeries;
    Medication : Medications;
    Allergies : Allergies;
    FamilyHistory: FamilyHistory;
    Vaccination : Vacccination;
    SocialHistory : SocialHistory;


    constructor(page:any){

        this.page = page;
        this.emailogin = new Emailogin(this.page);
        this.Password = new Passwordlogin(this.page);
        this.Dashboard = new Dashboard(this.page);
        this.MyHealth = new MyHealth(this.page);
        this.Vitals = new Vitals(this.page);
        this.Condition = new ConditionPage(this.page);
        this.Surgeries = new Surgeries(this.page);
        this.Medication = new Medications(this.page);
        this.Allergies = new Allergies(this.page);
        this.FamilyHistory = new FamilyHistory(this.page);
        this.Vaccination = new Vacccination(this.page);
        this.SocialHistory = new SocialHistory(this.page);

    }

   

getEmailogin() : Emailogin
{
    return this.emailogin
}
getPassword(){
    return this.Password
}
getDashboard(){
    return this.Dashboard
}
getMyHealth(){
    return this.MyHealth
}
getVitals(){
    return this.Vitals
}
getCondition(){
    return this.Condition
}
getSurgeries(){    
    return this.Surgeries
}
getMedications(){
    return this.Medication
}
getAllergies(){
    return this.Allergies
}
getFamilyHistory(){
    return this.FamilyHistory
}
getVaccination(){
    return this.Vaccination
}
getSocialHistory(){
    return this.SocialHistory
}
}