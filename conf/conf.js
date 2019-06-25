exports.config = {
    multiCapabilities: [{
        browserName: 'firefox'
    },
    ],
    framework: 'jasmine2',
    specs: ['../testSpecs/checkOffers.js'],
    "helpers": ["../node_modules/jasmine-expect/index.js"],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    onPrepare: function () {


        //browser.ignoreSynchronization=true;

        // Override the timeout for webdriver.
        browser.driver.manage().timeouts().implicitlyWait(10000);

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport: {
                resultsDir: 'allure-results'
            }
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

    }
}