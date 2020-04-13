"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect:true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    restartBrowserBetweenTests: true,
    capabilities: {
        chromeDriver: '../chromedriver.exe',
        SELENIUM_PROMISE_MANAGER: false,
        browserName: 'firefox',
        maxInstances: 10
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/*.feature'],
    //specs: ['../features/accessEditor.feature'],
    cucumberOpts: {
        // require step definitions
        //tags:"loginTesting",
        format: 'json:./cucumberreport.json',
        require: [
            './stepDefinitions/*.js',
        ]
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxpRUFBbUQ7QUFLeEMsUUFBQSxNQUFNLEdBQVc7SUFDeEIsNENBQTRDO0lBQzdDLG1EQUFtRDtJQUNuRCxxQkFBcUI7SUFDckIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFHOUQsdURBQXVEO0lBQ3ZELDBCQUEwQixFQUFFLElBQUk7SUFDaEMsWUFBWSxFQUFFO1FBQ1osWUFBWSxFQUFFLHFCQUFxQjtRQUNuQyx3QkFBd0IsRUFBQyxLQUFLO1FBQzlCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLFlBQVksRUFBRSxFQUFFO0tBQ2pCO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUM7SUFDaEMsOENBQThDO0lBQzlDLFlBQVksRUFBRTtRQUNWLDJCQUEyQjtRQUM1QixzQkFBc0I7UUFDckIsTUFBTSxFQUFDLDRCQUE0QjtRQUduQyxPQUFPLEVBQUU7WUFDUCx3QkFBd0I7U0FFekI7S0FDRjtJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUFFLHdCQUF3QjtZQUNoQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRzNCLENBQUM7Q0FJSixDQUFDIn0=