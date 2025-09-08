import {test,expect}from'@playwright/test';
test('Google',async({page})=>{


await page.keyboard.press('F11');
    await page.goto('https://www.google.com/')

   await page.keyboard.press('F11');

    
})
