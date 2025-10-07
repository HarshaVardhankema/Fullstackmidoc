import { LoginDataManager } from "../LoginPatient/LoginDataManager";
import Patientlogin from "../Utilies/Patientlogindata.json";
import FamilyHistoryData from "../Utilies/FamilyHistory.json";

import { test, expect, Page } from '@playwright/test';
;
test('Patientlogin', async ({ page }) => {

  //part 1 
  const poManager = new LoginDataManager(page);
  const emailogin = poManager.getEmailogin();
  const Password = poManager.getPassword();
  const Dashboard = poManager.getDashboard();
  const MyHealth = poManager.getMyHealth();
  // const Vitals = poManager.getVitals();
  // const Condition = poManager.getCondition();
  // const surgeries = poManager.getSurgeries();
  // const Medication = poManager.getMedications();
   //const Allergies = poManager.getAllergies();
   //const FamilyHistory = poManager.getFamilyHistory();
   // const Vacccination = poManager.getVaccination();
   const SocialHistory = poManager.getSocialHistory();




  //part 2 
  await emailogin.emailfeildbox(Patientlogin.email);
  await Password.PasswordFeildbox(Patientlogin.Password);
  await Dashboard.clickMyHealth();
  await MyHealth.Vitalss();
  // await Vitals.ClickAddData();
  // await Condition.conditions(Patientlogin.year, Patientlogin.Month);
  // await surgeries.Surgeriesdata(Patientlogin.surgeoname, Patientlogin.HospitalName, Patientlogin.documentPath);
  // await Medication.Tablets(Patientlogin.MedicineName, Patientlogin.Dosage, Patientlogin.dataindex, Patientlogin.PrescribedBy, Patientlogin.HospitalName)
//  await Allergies.AllergiesData(Patientlogin.documentPath);
//await FamilyHistory.FamilyData(FamilyHistoryData.Firstname,FamilyHistoryData["LastName "],FamilyHistoryData.Weight,FamilyHistoryData.Feet,FamilyHistoryData.Inches,FamilyHistoryData.year,FamilyHistoryData.month,FamilyHistoryData.day,FamilyHistoryData.MobileNo,FamilyHistoryData["EmailID "]);
// await Vacccination.Vacci();
await SocialHistory.SocialData();





})