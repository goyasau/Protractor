var data_Object = require('../dataJson/or_data');

var personalInformationPage = function(){

    this.enteringPersonalInformation = function(firstName, lastName , homeAddress , cityName ,state ,zipCode ,dateOfBirth ,individualIncome, additionalIncome ,emailAddress ,passWord ){
        element(by.name(data_Object.locators.personalInformationPage.firstName)).sendKeys(firstName);
        element(by.name(data_Object.locators.personalInformationPage.lastName)).sendKeys(lastName);
        element(by.name(data_Object.locators.personalInformationPage.homeAddress)).sendKeys(homeAddress);
        element(by.name(data_Object.locators.personalInformationPage.cityName)).sendKeys(cityName);
        element(by.name(data_Object.locators.personalInformationPage.state)).sendKeys(state);
        element(by.name(data_Object.locators.personalInformationPage.zipCode)).sendKeys(zipCode);
        element(by.name(data_Object.locators.personalInformationPage.dateOfBirth)).sendKeys(dateOfBirth);
        element(by.name(data_Object.locators.personalInformationPage.individualIncome)).sendKeys(individualIncome);
        element(by.name(data_Object.locators.personalInformationPage.additionalIncome)).sendKeys(additionalIncome);
        element(by.name(data_Object.locators.personalInformationPage.emailAddress)).sendKeys(emailAddress);
        element(by.name(data_Object.locators.personalInformationPage.passWord)).sendKeys(passWord);
    };

    this.clickTermsCheckbok = function(){
        element(by.css(data_Object.locators.personalInformationPage.termsCheckBox)).click();
    };

    this.clickCheckYourRateButton = function(){
        element(by.xpath(data_Object.locators.personalInformationPage.checkYourRateButton)).click();
    };
};
module.exports = new personalInformationPage();