
import { OTP } from "../SignInPatient/OTP";
import { PatientDetails } from "../SignInPatient/PatientDataManager";
import Signindata from "../Utilies/Signinpatientdata.json";

const{test,expect}=require('@playwright/test');

test('PatientSignin',async({page})=>{

    //Part 1 
    const poManager = new PatientDetails(page);
    const email  = poManager.getEmail();
    const PersonalDetails = poManager.getPersonalDetails();
    const OTP = poManager.getOTP();
    const Medicalpage = poManager.getMedicalpage();
    const Password =poManager.getPassword();
    const continuebutt =poManager.getContinue();






    //part 2 
    await email.NewEmail(Signindata.email);
    await PersonalDetails.PersonalDetails(Signindata.firstname, Signindata.Lastname,Signindata.Weight,Signindata.Feet,Signindata.Inches,Signindata.year,Signindata.Month,Signindata.Mobile)
    await OTP.OTP(Signindata.OTP1,Signindata.OTP2,Signindata.OTP3,Signindata.OTP4)
    await Medicalpage.Medical();
    await Password.Password(Signindata.newPassword,Signindata.Confirmpassword);
    await continuebutt.Continuebutton();
    


})