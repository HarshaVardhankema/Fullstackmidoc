import { Locator, Page } from "@playwright/test";

export class VisitDoctorpage {

    page: Page;
    Chiefcompliantbutt: Locator;
    ChiefCompliant: Locator;

    //HPI
    HPI: Locator;
    Pain :Locator;
    Head: Locator;
    Onset : Locator;
    Chronicity : Locator;
    OnsetQuality : Locator;
    Frequency : Locator;
    RatingScale : Locator;
    AssociatedSymptoms : Locator;
    Timeperiod : Locator;
    SaveHPI : Locator;

    // ROS
    ROS : Locator;
    wheezing : Locator
    SaveROS :Locator;

    //Vitals 
    Vitals : Locator;
    BodyTempeature :Locator;
    HeartRate : Locator;
    RespiratoryRate : Locator;
    BPsystolic : Locator;
    BPDiastolic : Locator;
    OxygenSaturation : Locator;
    FastingBloodGlucose : Locator;
    PostprandialBloodGlucose :Locator;
    SaveVitals : Locator;

    //PhysicalExam
    PhysicalExam : Locator;
    Constitutional : Locator;
    alert : Locator;
    Plus : Locator;
    SavePhysicalExam :Locator;

    //Assessment
    Assessment : Locator;
    PrimaryHealthIssues : Locator;
    Diagnosis : Locator;
    Plans : Locator;
    SaveAssessment : Locator;

    //Orders
    Orders : Locator;
    Addbutton :Locator;
    ViewButton : Locator;
    




    constructor(page: any) {

        this.page = page;
        this.Chiefcompliantbutt = page.getByText('Chief complaint');
        this.ChiefCompliant = page.locator("[name='textField']");

        //HPI
        this.HPI = page.getByText('HPI');
        this.Pain = page.locator('.chakra-badge.css-pj758u').first();
        this.Head = page.locator('.chakra-button.css-qse13x').first();
        this.Onset = page.getByText('Today');
        this.Chronicity = page.getByText('New');
        this.OnsetQuality = page.getByText('Sudden');
        this.Frequency = page.getByText('Continous');
        this.RatingScale = page.locator('.chakra-button.css-r4rw8z').first();
        this.AssociatedSymptoms = page.locator("[class*='css-x93bhs']").first();
        this.Timeperiod = page.locator('.chakra-input.css-10dip6r');
        this.SaveHPI = page.locator('.chakra-button.css-m8d89p');

        //ROS 
        this.ROS = page.getByText('ROS');
        this.wheezing = page.getByText('wheezing');
        this.SaveROS = page.getByText('Save ROS');

        //Vitals 
        this.Vitals = page.getByText('Vitals').nth(1);//nth(0,1)
        this.BodyTempeature = page.locator("[name='Body Temperature']");
        this.HeartRate = page.locator("[name='Pulse']");
        this.RespiratoryRate = page.locator("[name='Respiratory Rate']")
        this.BPsystolic = page.getByPlaceholder('Systolic');
        this.BPDiastolic = page.getByPlaceholder('Diastolic');
        this.OxygenSaturation = page.locator("[name='Oxygen Saturation']");
        this.FastingBloodGlucose = page.locator("[name='Fasting Blood Glucose']");
        this.PostprandialBloodGlucose = page.locator("[name='Postprandial Blood Glucose']")
        this.SaveVitals = page.locator('.chakra-button.css-26eig2');

        //Physical Exam
        this.PhysicalExam = page.getByText('Physical Exam');
        this.Constitutional = page.getByText('Constitutional').first();
        this.alert = page.getByText('alert').first();
        this.Plus =  page.locator("svg[viewBox='0 0 448 512']").first();
        this.SavePhysicalExam = page.locator(".chakra-button.css-12mxl0v");

        //Assessment

        this.Assessment = page.getByText('Assessment');
        this.PrimaryHealthIssues = page.getByText('Primary Health Issues');
        this.Diagnosis = page.locator("[name='doctorsassessment[0].diagnosis']");
        this.Plans = page.locator("[name='doctorsassessment[0].plan']");
        this.SaveAssessment = page.locator('.chakra-button.css-1xqvmqz')


        //Orders
        this.Orders = page.getByText('Orders').nth(1);//nth(1,2)
       // this.Addbutton = page.getByText('+ Add').first();
        this.ViewButton = page.locator('.chakra-badge.css-pj758u').first();







        










    }

    async VisitDoctor(ChiefCompliant: string,Timeperiod:string,BodyTempeature:string,HeartRate:string,RespiratoryRate:string,BPsystolic:string,BPDiastolic:string,OxygenSaturation:string,FastingBloodGlucose:string,PostprandialBloodGlucose:string,Diagnosis:string,Plans:string) {

        await this.Chiefcompliantbutt.click();
        await this.ChiefCompliant.fill(ChiefCompliant);

        //HPI
        await this.HPI.click();
        await this.Pain.click();
        await this.Head.click();
        await this.Onset.check();
        await this.Chronicity.check();
        await this.OnsetQuality.check();
        await this.Frequency.check();
        await this.RatingScale.click();
        await this.AssociatedSymptoms.check();
        await this.Timeperiod.fill(Timeperiod)
        await this.SaveHPI.click();

        //ROS
        await this.ROS.click();
        await this.wheezing.click();
        await this.SaveROS.click();

        //Vitals 
        await this.Vitals.click();
        await this.BodyTempeature.fill(BodyTempeature);
        await this.HeartRate.fill(HeartRate);
        await this.RespiratoryRate.fill(RespiratoryRate);
        await this.BPsystolic.fill(BPsystolic);
        await this.BPDiastolic.fill(BPDiastolic);
        await this.OxygenSaturation.fill(OxygenSaturation);
        await this.FastingBloodGlucose.fill(FastingBloodGlucose);
        await this.PostprandialBloodGlucose.fill(PostprandialBloodGlucose);
        await this.SaveVitals.click();

        //PhysicalExam
        await this.PhysicalExam.click();
        await this.Constitutional.click();
        await this.alert.click();
        await this.Plus.click();
        await this.SavePhysicalExam.click();

        //Assessment
        await this.Assessment.click();
        await this.PrimaryHealthIssues.click();
        await this.Diagnosis.fill(Diagnosis);
        await this.Plans.fill(Plans);
        await this.SaveAssessment.click();

        //Orders
        await this.Orders.click();
        //await this.Addbutton.click();
        await this.ViewButton.click();




        



        




    }
}