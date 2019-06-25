var data_Object = require('../dataJson/or_data');
var select_Wrapper = require('../utils/selectWrapper');
var select_Loan_Purpose = new select_Wrapper(by.id(data_Object.locators.homepage.selectLoanPurpose));

var homePage = function(){

    this.enteringLoanRequirementDetails = function(amount , selectPurpose){
      element(by.id(data_Object.locators.homepage.loanAmount)).sendKeys(amount);
      element(by.id(data_Object.locators.homepage.selectLoanPurpose)).sendKeys(selectPurpose);
      element(by.buttonText(data_Object.locators.homepage.checkYourRateButton)).click();
    };

    this.clickButton = function(Locator){
        element(by.xpath(Locator)).click();
    };

};
module.exports = new homePage();