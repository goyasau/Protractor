var data_Object = require('../dataJson/or_data');

var offerPage = function(){
    this.gettingTheInformationFromOfferPage = async function(Locator){
        var text = await element(by.xpath(Locator)).getText();
        return text;
    };

    this.signOutFromOfferPageClickingMenu = function(Locator){
        element(by.xpath(Locator)).click;
    };

};
module.exports = new offerPage();