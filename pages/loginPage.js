var data_Object = require('../dataJson/or_data');
//changes from sultan
//hiu how r u
var LoginPage = function(){

    this.EnterText = function(locator , value){
        element(by.name(locator)).sendKeys();
    };

    this.clickingSignInToYourAccount = function(locator){
        element(by.buttonText(locator)).click();
    };
};
module.exports = new LoginPage();
