import { Locator, Page } from "@playwright/test";

export class Vitals {
    page: Page;
    AddData: Locator;
    BodyTemp: Locator;
    BTValueFeild: Locator
    BTValue: Locator;
    BTButton: Locator;
    AIButton: Locator;
    Skip: Locator;

    // --------//Pulse
    Pulse: Locator;
    PulseValueFeild: Locator;
    Pulsevalue: Locator;
    PulseButton: Locator;
    PulseAIButton: Locator;
    PulseSkipButton: Locator;

    //----------//BloodPressure
    BP: Locator;
    SystolicField: Locator;
    SystolicValue: Locator;
    DiastolicField: Locator;
    DiastolicValue: Locator;
    BPButton: Locator;
    BPAIButton: Locator;
    BPSkipButton: Locator;

    //---------//Respiratory rate
    Resp: Locator;
    RespValueFeild: Locator;
    Respvalue: Locator;
    RespButton: Locator;
    RespAIButton: Locator;
    RespSkipButton: Locator;

    //------//Oxygen Saturation
    Oxygen: Locator;
    OxygenValueFeild: Locator;
    Oxygenvalue: Locator;
    OxygenButton: Locator;
    OxygenAIButton: Locator;
    OxygenSkipButton: Locator;

    //------------//Weight 
    Weight: Locator;
    WeightValueFeild: Locator;
    Weightvalue: Locator;
    WeightButton: Locator;
    WeightAIButton: Locator;
    WeightSkipButton: Locator;




    constructor(page: Page) {

        this.page = page;
        this.AddData = page.getByRole('button', { name: 'Add data' });
        //BodyTempeature
        this.BodyTemp = page.locator('.chakra-text.css-11rqhwb').nth(0);
        this.BTValueFeild = page.locator('.chakra-input.css-17k2bm9');
        this.BTValue = page.locator('button[data-index="89"]');
        this.BTButton = page.locator('.chakra-button.css-zk5ooc');
        this.AIButton = page.locator('.css-110mxbr').first();
        this.Skip = page.locator('.css-szcg16').nth(1);

        // -----------// Pulse
        this.AddData = page.getByRole('button', { name: 'Add data' });
        this.Pulse = page.locator('.chakra-text.css-11rqhwb').nth(1);
        this.PulseValueFeild = page.locator('.chakra-input.css-17k2bm9');
        this.Pulsevalue = page.locator('button[data-index="33"]');
        this.PulseButton = page.locator('.chakra-button.css-zk5ooc');
        this.PulseAIButton = page.locator('.css-110mxbr').first();
        this.PulseSkipButton = page.locator('.css-szcg16').nth(1);

        //---------- //Blood Pressure
        this.AddData = page.getByRole('button', { name: 'Add data' });
        this.BP = page.locator('.chakra-text.css-11rqhwb').nth(2);
        this.SystolicField = page.locator('.chakra-input.css-17k2bm9').nth(0);
        this.SystolicValue = page.locator('button[data-index="30"]');
        this.DiastolicField = page.locator('.chakra-input.css-17k2bm9').nth(1);
        this.DiastolicValue = page.locator('button[data-index="40"]');
        this.BPButton = page.locator('.chakra-button.css-zk5ooc');
        this.BPAIButton = page.locator('.css-110mxbr').first();
        this.BPSkipButton = page.locator('.css-szcg16').nth(1);

        //-----------//Respiratory rate
        this.AddData = page.getByRole('button', { name: 'Add data' });
        this.Resp = page.locator('.chakra-text.css-11rqhwb').nth(3);
        this.RespValueFeild = page.locator('.chakra-input.css-17k2bm9');
        this.Respvalue = page.locator('button[data-index="30"]');
        this.RespButton = page.locator('.chakra-button.css-zk5ooc');
        this.RespAIButton = page.locator('.css-110mxbr').first();
        this.RespSkipButton = page.locator('.css-szcg16').nth(1);

        //---------------//Oxygen Saturation
        this.AddData = page.getByRole('button', { name: 'Add data' });
        this.Oxygen = page.locator('img[src="/assets/imgs/spo2-blue.png"]');
       // this.Oxygen = page.locator('.chakra-text.css-11rqhwb').nth(4);
        this.OxygenValueFeild = page.locator('.chakra-input.css-17k2bm9');
        this.Oxygenvalue = page.locator('button[data-index="30"]');
        this.OxygenButton = page.locator('.chakra-button.css-zk5ooc');
        this.OxygenAIButton = page.locator('.css-110mxbr').first();
        this.OxygenSkipButton = page.locator('.css-szcg16').nth(1);

        //------------//Weight 
        this.AddData = page.getByRole('button', { name: 'Add data' });
        this.Weight = page.locator('.chakra-text.css-11rqhwb').nth(5);
        this.WeightValueFeild = page.locator('.chakra-input.css-17k2bm9');
        this.Weightvalue = page.locator('button[data-index="30"]');
        this.WeightButton = page.locator('.chakra-button.css-zk5ooc');
        this.WeightAIButton = page.locator('.css-110mxbr').first();
        this.WeightSkipButton = page.locator('.css-szcg16').nth(1);




    }
    async ClickAddData() {
        await this.AddData.click();
        await this.BodyTemp.click();
        await this.BTValueFeild.click();
        await this.BTValue.click();
        await this.BTButton.click();
        await this.AIButton.click();
        await this.Skip.click();

        // -----//Pulse
        await this.AddData.click();
        await this.Pulse.click();
        await this.PulseValueFeild.click();
        await this.Pulsevalue.click();
        await this.PulseButton.click();
        await this.PulseAIButton.click();
        await this.PulseSkipButton.click();

        //-----//Blood Pressure 
        await this.AddData.click();
        await this.BP.click();
        await this.SystolicField.click();
        await this.SystolicValue.click();
        await this.DiastolicField.click();
        await this.DiastolicValue.click();
        await this.BPButton.click();
        await this.BPAIButton.click();
        await this.BPSkipButton.click();

        //-------- //Respiratory rate
        await this.AddData.click();
        await this.Resp.click();
        await this.RespValueFeild.click();
        await this.Respvalue.click();
        await this.RespButton.click();
        await this.RespAIButton.click();
        await this.RespSkipButton.click();

        //----------//Oxygen 
        await this.AddData.click();
        await this.Oxygen.click();
        await this.OxygenValueFeild.click();
        await this.Oxygenvalue.click();
        await this.OxygenButton.click();
        await this.OxygenAIButton.click();
        await this.OxygenSkipButton.click();

        //-------------//Weight 
        await this.AddData.click();
        await this.Weight.click();
        await this.WeightValueFeild.click();
        await this.Weightvalue.click();
        await this.WeightButton.click();
        await this.WeightAIButton.click();
        await this.WeightSkipButton.click();








    }
}