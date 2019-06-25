var basePageCommonFunctions = function(){

    this.getRandomEmail = function(){
        var strValues = "abcdefghijk123456789";
        var strEmail = "";
        for (var i = 0; i < strValues.length; i++) {
            strEmail = strEmail + strValues.charAt(Math.round(strValues.length * Math.random()));
        }
        return strEmail + "@upgrade-challenge.com";
    };

    this.getRandomString = function(){
        var randomText = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < characterLength; i++)
            randomText += possible.charAt(Math.floor(Math.random() * possible.length));
        return randomText;
    };

    this.getRandomNumber = function(){
        var randomNumber = "";
        var possible = "0123456789";
        for (var i = 0; i < numberLength; i++)
            randomNumber += possible.charAt(Math.floor(Math.random() * possible.length));
        return randomNumber;
    };

    this.getPageTitle = async function(){
        var title = await browser.driver.getTitle();
        return  title;
    };

};
module.exports = new basePageCommonFunctions();