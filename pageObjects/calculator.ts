import { ElementFinder, element, by, browser } from "protractor";
import { CalculatorSelectors } from "../locators/pageObjects";

export class Calculator
{

    async navigateTo() {
       await browser.get('https://juliemr.github.io/protractor-demo/');
      }

    async firstEditBox(value: string) {
        await element(by.model(CalculatorSelectors.FIRST_EDIT_BOX)).sendKeys(value);
    }

    async secondEditBox(value: string) {
        await element(by.model(CalculatorSelectors.SECOND_EDIT_BOX)).sendKeys(value);
    }
    
    async go() {
        await element(by.id(CalculatorSelectors.GO_BUTTON)).click(); 
    }

    async getResult() {
        return await element(by.css(CalculatorSelectors.GET_RESULT)).getText();
    }

    async add() {
        await element(by.model(CalculatorSelectors.OPPERATOR)).element(by.css(CalculatorSelectors.ADDITION)).click();
    }

    async subtract() {
        await element(by.model(CalculatorSelectors.OPPERATOR)).element(by.css(CalculatorSelectors.SUBSTRACTION)).click();
    }
    async multiply() {
        await element(by.model(CalculatorSelectors.OPPERATOR)).element(by.css(CalculatorSelectors.MULTIPLICATION)).click();
    }


}