// @ts-check
import { defineConfig, devices } from '@playwright/test';

import { time } from 'console';
import { on } from 'events';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 120000, 
  SlowBuffer: 6000, // Slow down by 1 second
  except:{
  timeout:10000,
  } ,
  
  // Default timeout for each test is 30 seconds
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',
  reporter: [ ['line'], ['allure-playwright'],
   ['list'],
  ['html'],
  ['json', { outputFile: 'results.json' }],
  ['junit', { outputFile: 'results.xml' }]
],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

   /* browsername: 'chromium',*/
   /*  browsername: 'firefox',*/
   /* browsername: 'webkit',*/
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   trace: 'on',
    screenshot: 'on',
    video: 'on',
    headless: false,
    ignoreHTTPSErrors: true,
    permissions:['geolocation'],
    viewport: { width: 3020, height: 2080 },
    


  },
  
   
  /* Configure projects for major browsers */
 
  projects: [
    
     {
      name: 'chromium',
     use: { ...devices['Desktop Chrome'] },
    },
     /*
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
 /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
/*
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
/*
    Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
   

module.exports = (config);