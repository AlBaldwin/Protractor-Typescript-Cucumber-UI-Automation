"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./pageObjects/calculator");
const angularHomePage_1 = require("./pageObjects/angularHomePage");
describe('chain locators demo', () => {
    it('Open Angular js website', () => __awaiter(this, void 0, void 0, function* () {
        let calc = new calculator_1.Calculator();
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
        yield calc.firstEditBox.sendKeys("2");
        yield calc.secondEditBox.sendKeys("5");
        yield calc.go.click();
        yield calc.getResult.getText().then(function (text) {
            console.log(text);
        });
    }));
    it('Angular home page title validation', () => __awaiter(this, void 0, void 0, function* () {
        let ang = new angularHomePage_1.angularHomePage();
        yield protractor_1.browser.get("https://angularjs.org");
        yield ang.angularLink.click();
        yield protractor_1.browser.sleep(3000);
        yield ang.search.sendKeys("hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBR3pDLHlEQUFzRDtBQUN0RCxtRUFBZ0U7QUFFaEUsUUFBUSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBRTtJQUVqQyxFQUFFLENBQUMseUJBQXlCLEVBQUUsR0FBUyxFQUFFO1FBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBRTVCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUNoRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEdBQVMsRUFBRTtRQUNoRCxJQUFJLEdBQUcsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztRQUVoQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0MsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV2QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFDLENBQUEifQ==