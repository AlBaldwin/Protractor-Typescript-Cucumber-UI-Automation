import { ElementFinder, element, by, browser } from "protractor";

export class Calculator
{

    navigateTo() {
        return browser.get('https://juliemr.github.io/protractor-demo/') as Promise<any>;
      }

    firstEditBox(value) {
        return element(by.model("first")).sendKeys(value) as Promise<any>;
    }
    secondEditBox(value) {
        return element(by.model("second")).sendKeys(value) as Promise<any>;
    }
    go() {
        return element(by.id("gobutton")).click() as Promise<any>;
    }

    getResult() {
        return element(by.css("td:nth-child(3)")).getText() as Promise<any>;
    }

    add() {
        return element(by.model("operator")).element(by.css('[value="ADDITION"]')).click() as Promise<any>;
    }

    subtract() {
        return element(by.model("operator")).element(by.css('[value="SUBTRACTION"]')).click() as Promise<any>;
    }
    multiply() {
        return element(by.model("operator")).element(by.css('[value="MULTIPLICATION"]')).click() as Promise<any>;
    }


}