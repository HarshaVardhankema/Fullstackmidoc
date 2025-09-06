import { Page, BrowserContext } from "@playwright/test";
import { EmailAppo } from "./EmailAppo";
import { PasswordAppo } from "./PasswordAppo";
import { DashboardAppo } from "./DashboardAppo";
import { Appoinment } from "./Appoinment";
import { BookingSuccessful } from "./BookingSuccessful";
import { DoctorEmail } from "./DoctorEmail";
import { Visit } from "./Visits";

export class AppoManager {
  page: Page;
  context: BrowserContext;
  Email: EmailAppo;
  Password: PasswordAppo;
  Dashboard: DashboardAppo;
  Appo: Appoinment;
  BookingSuccessfully: BookingSuccessful;
  DoctorEmail: DoctorEmail | null; // initialize later
  Visits: Visit;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;

    // Patient-side pages
    this.Email = new EmailAppo(this.page);
    this.Password = new PasswordAppo(this.page);
    this.Dashboard = new DashboardAppo(this.page);
    this.Appo = new Appoinment(this.page);
    this.BookingSuccessfully = new BookingSuccessful(this.page);
    this.Visits = new Visit(this.page);

    // Doctor-side page (will be set when openDoctorApp() is called)
    this.DoctorEmail = null;
  }

  // Getters
  getEmail() {
    return this.Email;
  }
  getPassword() {
    return this.Password;
  }
  getDashboard() {
    return this.Dashboard;
  }
  getAppo() {
    return this.Appo;
  }
  getBookingSuccessfully() {
    return this.BookingSuccessfully;
  }
 
  // Open Doctor App in a new tab
//  async openDoctorApp() {
//    const doctorPage = await this.context.newPage();
//   await doctorPage.goto("https://midoc-provider-dev.azurewebsites.net/login");
//   this.DoctorEmail = new DoctorEmail(doctorPage);
//   return this.DoctorEmail;
//  }
  
// getVisits() {
//    return this.Visits;
//  }
//  getDoctorEmail() {
//return this.DoctorEmail;
//  }

}
