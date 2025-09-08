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
  const VisitDoctor = doctorPOManager.getVisitDoctor();
  const DoctorVisitMedicin = doctorPOManager.getDoctorVisitMedicin();

  

  
  
  //part2 
  await doctorLogin.login(Visitsdata.DocEmail,Visitsdata.Password);
  await Visitspage.AppoVisits();
  await VisitDetail.VisitDetail();
  await VisitCreated.PatientOverview(Visitsdata.surgeronName,Visitsdata.HospitalName,Visitsdata.documentPath,Visitsdata.MedicineName,Visitsdata.Strength,Visitsdata.PrescribedBy);
  await VisitDoctor.VisitDoctor(Visitsdata.chiefCompliant,Visitsdata.Timeperiod,Visitsdata.BodyTempeature,Visitsdata.HeartRate,Visitsdata.RespiratoryRate,Visitsdata.BPsystolic,Visitsdata.BPDiastolic,Visitsdata.OxygenSaturation,Visitsdata.FastingBloodGlucose,Visitsdata.PostprandialBloodGlucose,Visitsdata.Diagnosis,Visitsdata.Plans);
  await DoctorVisitMedicin.AddMedicin(Visitsdata.Strength);

  
});
