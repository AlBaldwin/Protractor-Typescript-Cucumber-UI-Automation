"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const pageObjects_1 = require("../locators/pageObjects");
class Calculator {
    navigateTo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
        });
    }
    firstEditBox(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.model(pageObjects_1.CalculatorSelectors.FIRST_EDIT_BOX)).sendKeys(value);
        });
    }
    secondEditBox(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.model(pageObjects_1.CalculatorSelectors.SECOND_EDIT_BOX)).sendKeys(value);
        });
    }
    go() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.id(pageObjects_1.CalculatorSelectors.GO_BUTTON)).click();
        });
    }
    getResult() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.element(protractor_1.by.css(pageObjects_1.CalculatorSelectors.GET_RESULT)).getText();
        });
    }
    add() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.model(pageObjects_1.CalculatorSelectors.OPPERATOR)).element(protractor_1.by.css(pageObjects_1.CalculatorSelectors.ADDITION)).click();
        });
    }
    subtract() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.model(pageObjects_1.CalculatorSelectors.OPPERATOR)).element(protractor_1.by.css(pageObjects_1.CalculatorSelectors.SUBSTRACTION)).click();
        });
    }
    multiply() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.model(pageObjects_1.CalculatorSelectors.OPPERATOR)).element(protractor_1.by.css(pageObjects_1.CalculatorSelectors.MULTIPLICATION)).click();
        });
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2NhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUU7QUFDakUseURBQThEO0FBRTlELE1BQWEsVUFBVTtJQUdiLFVBQVU7O1lBQ2IsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7S0FBQTtJQUVHLFlBQVksQ0FBQyxLQUFhOztZQUM1QixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQ0FBbUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRixDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsS0FBYTs7WUFDN0IsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQW1CLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakYsQ0FBQztLQUFBO0lBRUssRUFBRTs7WUFDSixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxpQ0FBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hFLENBQUM7S0FBQTtJQUVLLFNBQVM7O1lBQ1gsT0FBTyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNFLENBQUM7S0FBQTtJQUVLLEdBQUc7O1lBQ0wsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQW1CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pILENBQUM7S0FBQTtJQUVLLFFBQVE7O1lBQ1YsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQW1CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JILENBQUM7S0FBQTtJQUNLLFFBQVE7O1lBQ1YsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQW1CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBbUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZILENBQUM7S0FBQTtDQUdKO0FBbkNELGdDQW1DQyJ9