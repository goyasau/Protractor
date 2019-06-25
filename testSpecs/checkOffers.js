var data_Object = require('../dataJson/or_data');
var logger = require('../utils/log.js');
var homePageObject = require('../pages/homePage.js');
var personalInformationPageObject = require('../pages/personalInformationPage.js');
var basePageObject = require('../pages/basePageCommonFunctions.js');
var offerPageObject = require('../pages/offerPage.js');
var loginPageObject = require('../pages/loginPage.js');
var loan_Amount = '';
var APR = '';
var loanTerm = '';
var monthlyPayment = '';
var pageTitle = '';

describe("Entering basic information and details , capture default offers",function(){
    browser.ignoreSynchronization = true;
    var emailID = basePageObject.getRandomEmail();
    beforeEach(function(){
        browser.get(data_Object.testsiteurl);
        browser.driver.manage().timeouts().implicitlyWait(6000);
    });

    it("Entering user basic information and capturing the details" ,async function(){
        logger.log('info','Test Case : 1 started');
        logger.log('info','Navigating to the Website , Entering loan amount and loan purpose');
        homePageObject.enteringLoanRequirementDetails(data_Object.testdata.homepage.loanAmount , data_Object.testdata.homepage.loanPurpose);
        logger.log('info','Getting title of the next page');
        //Var pageTitle = await basePageObject.getPageTitle();
        //logger.log('info','Comparing title captured '+ pageTitle + "contains personal-information");
        //expect(browser.getTitle()).toContains("personal-information");
        logger.log('info','Entering user Basic information');
        personalInformationPageObject.enteringPersonalInformation(data_Object.testdata.personalInformationPage.firstName ,
            data_Object.testdata.personalInformationPage.lastName,
            data_Object.testdata.personalInformationPage.homeAddress,
            data_Object.testdata.personalInformationPage.cityName,
            data_Object.testdata.personalInformationPage.state,
            data_Object.testdata.personalInformationPage.zipCode,
            data_Object.testdata.personalInformationPage.dateOfBirth,
            data_Object.testdata.personalInformationPage.individualIncome,
            data_Object.testdata.personalInformationPage.additionalIncome,
            emailID,
            data_Object.testdata.personalInformationPage.passWord
            );
        logger.log('info','Clicking on terms checkbox on personal information page');
        personalInformationPageObject.clickTermsCheckbok();
        logger.log('info','Clicking on check your rate button on personal information page');
        personalInformationPageObject.clickCheckYourRateButton();
        logger.log('info','Capturing loaloan_Amount, APR, loanTerm, MonthlyPayment on offerPage');
        loan_Amount =await offerPageObject.gettingTheInformationFromOfferPage(data_Object.locators.offerpage.userLoanAmount);
        APR =await offerPageObject.gettingTheInformationFromOfferPage(data_Object.locators.offerpage.APR);
        loanTerm =await offerPageObject.gettingTheInformationFromOfferPage(data_Object.locators.offerpage.loanTerm);
        monthlyPayment =await offerPageObject.gettingTheInformationFromOfferPage(data_Object.locators.offerpage.monthlyPayment);
        logger.log('info','testCase successfully completed');
    }) ;


    it("re-verify the loan amount details captured in testcase-one  by logging again on to the verify page" ,async function(){
        logger.log('info','Test Case : 2 started');
        logger.log('info','Clicking on the login button');
         homePageObject.clickButton(data_Object.locators.homepage.loginButtonClick);
         //loginPageObject.EnterText(data_Object.locators.loginPage.userName , emailID);
         //loginPageObject.EnterText(data_Object.locators.loginPage.password ,data_Object.testdata.personalInformationPage.passWord);
         //loginPageObject.clickingSignInToYourAccount(data_Object.locators.loginPage.signInButton)
        logger.log('info','Capturing loaloan_Amount, APR, loanTerm, MonthlyPayment on offerPage after logging again');
        var offer_APR = await offerPageObject.gettingTheInformationFromOfferPage(data_Object.locators.offerpage.APR);
        var offer_loan_Amount =await offerPageObject.gettingTheInformationFromOfferPage(data_Object.locators.offerpage.userLoanAmount);
        var offer_loanTerm =await offerPageObject.gettingTheInformationFromOfferPage(data_Object.locators.offerpage.loanTerm);
        var offer_monthlyPayment =await offerPageObject.gettingTheInformationFromOfferPage(data_Object.locators.offerpage.monthlyPayment);
        logger.log('info','Verify offer_APR with previously captured APR');
        expect(APR).toBe(offer_APR);
        logger.log('info','Verify offer_loan_Amount with previously captured loan_Amount');
        expect(loan_Amount).toBe(offer_loan_Amount);
        logger.log('info','Verify offer_loanTerm with previously captured loanTerm');
        expect(loanTerm).toBe(offer_loanTerm);
        logger.log('info','Verify offer_monthlyPayment with previously captured monthlyPayment');
        expect(monthlyPayment).toBe(offer_monthlyPayment);
    });
});