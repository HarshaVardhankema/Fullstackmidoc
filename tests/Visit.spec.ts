import { test, expect } from "@playwright/test";
import { DoctorPOManager } from "../DoctorVisits/DoctorPOManager";  
import Visitsdata from "../Utilies/Visits.json";

test("Visits", async ({ page }) => {
  const doctorPOManager = new DoctorPOManager(page);
  // Part1 
  const doctorLogin = doctorPOManager.getDoctorLogin();
  const Visitspage = doctorPOManager.getVisitsPage();
  const VisitDetail = doctorPOManager.getVisitDetails();
  const VisitCreated = doctorPOManager.getVisitCreated();

  

  
  
  //part2 
  await doctorLogin.login(Visitsdata.DocEmail,Visitsdata.Password);
  await Visitspage.AppoVisits();
  await VisitDetail.VisitDetail();
  await VisitCreated.PatientOverview(Visitsdata.surgeronName,Visitsdata.HospitalName,Visitsdata.documentPath);
  
});
