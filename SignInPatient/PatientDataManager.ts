import { Page,Locator } from "@playwright/test"
import { Email }  from "./Email";
import { PersonalDetails } from "./PersonalDetails";
import { OTP } from "./OTP";
import { Medicalpage } from "./Medicalpage";
import { Password } from "./Password";
import { Continue } from "./continue";


export class PatientDetails 
{
    page : Page;
    email : Email
    PersonalDetails : PersonalDetails
    OTP : OTP;
    Medical : Medicalpage;
    Password : Password;
    Continue : Continue;
    


    constructor(page: any)
    {

        this.page = page;
        this.email = new Email(this.page)
        this.PersonalDetails =new PersonalDetails(this.page);
        this.OTP = new OTP(this.page);
        this.Medical = new Medicalpage(this.page);
        this.Password = new Password(this.page);
        this.Continue = new Continue(this.page);
        
        
        
    }

    getEmail(): Email
    {
        return this.email;
    }
    getPersonalDetails(): PersonalDetails
    {
        return this.PersonalDetails;
    }
   
    getOTP() : OTP
    {
        return this.OTP
    }
    getMedicalpage() : Medicalpage
    {
        return this.Medical
    }
    getPassword() : Password
    {
        return this.Password
    }
    getContinue() :Continue
    {
        return this.Continue
    }
   
}