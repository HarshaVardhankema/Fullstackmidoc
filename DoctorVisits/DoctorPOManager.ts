import { Page } from "@playwright/test";
import { DoctorLogin } from "./DoctorLogin";
import { VisitsPage } from "./Visitspage";
import { VisitDetails } from "./VisitDetails";
import { VisitCreated } from "./VisitCreated";
import { VisitDoctorpage } from "./VisitDoctorpage";
import { VisitAddMedicine } from "./VisitAddMedicine";

export class DoctorPOManager
{

    page: Page;
    Doctorlogin : DoctorLogin
    Visits : VisitsPage
    VisitDetail : VisitDetails;
    VisitCreated : VisitCreated;
    VisitDoctor : VisitDoctorpage;
    DoctorVisitMedicin : VisitAddMedicine;


    constructor(page : any ){

        this.page = page;
        this.Doctorlogin = new DoctorLogin(this.page);
        this.Visits = new VisitsPage(this.page);
        this.VisitDetail = new VisitDetails(this.page);
        this.VisitCreated = new VisitCreated(this.page);
        this.VisitDoctor = new VisitDoctorpage(this.page);
        this.DoctorVisitMedicin = new VisitAddMedicine(this.page);







        
    }

    getDoctorLogin() : DoctorLogin
    {

        return this.Doctorlogin
    }
    getVisitsPage() : VisitsPage
    {
        return this.Visits
    }
    getVisitDetails() : VisitDetails
    {
        return this.VisitDetail
    }
    getVisitCreated() : VisitCreated
    {
        return this.VisitCreated
    }
    getVisitDoctor() : VisitDoctorpage
{
    return this.VisitDoctor
    }
    getDoctorVisitMedicin():VisitAddMedicine
    {
        return this.DoctorVisitMedicin
    }
}