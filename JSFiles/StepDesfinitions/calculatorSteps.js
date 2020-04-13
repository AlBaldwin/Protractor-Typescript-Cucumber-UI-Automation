"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObjects/calculator");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new calculator_1.Calculator();
cucumber_1.Given('a web browser is on the calculation website', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('the user adds two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.add.click();
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.When('the user subtracts two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.subtract.click();
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.When('the user multiplies two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.multiply.click();
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.Then('the output displays {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvclN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlc2Zpbml0aW9ucy9jYWxjdWxhdG9yU3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywwREFBdUQ7QUFFdkQsMkNBQXFDO0FBQ3JDLGdEQUF3QjtBQUV4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBRTVCLGdCQUFLLENBQUMsNkNBQTZDLEVBQUcsR0FBTyxFQUFFO0lBQzNELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlEQUFpRCxFQUFFLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQzlFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxzREFBc0QsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUNwRixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsdURBQXVELEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDckYsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDcEQsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWhDLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9