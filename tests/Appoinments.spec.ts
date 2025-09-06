import { test, expect } from "@playwright/test";
import { AppoManager } from "../Appoinments/AppoManager";
import Appoinmets from "../Utilies/Appoinments.json";

test("Appoinment", async ({ browser  }) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  // Initialize Page Object Manager
  const poManager = new AppoManager(page, context);

  // Patient side objects
  const Email = poManager.getEmail();
  const Password = poManager.getPassword();
  const Dashboard = poManager.getDashboard();
  const Appo = poManager.getAppo();
  const BookingSuccessfully = poManager.getBookingSuccessfully();
  

  // Doctor side objects
  // const Visits = poManager.getVisits();

  // --------------------------
  // 🟢 Patient Flow
  // --------------------------
  await Email.EmailFeildbox(Appoinmets.Email);
  await Password.PasswordFeildbox(Appoinmets.Password);
  await Dashboard.findDoctor();
  await Appo.BookingAppo();
  await BookingSuccessfully.BookingCompleted();

  // --------------------------
  // 🔵 Doctor Flow (open new tab only after patient completes booking)
  // --------------------------
 // const DoctorEmail = await poManager.openDoctorApp();
//  await DoctorEmail.DoctorLogin(Appoinmets.DocEmail, Appoinmets.DocPassword);
//  await Visits.StartVisit();
});
