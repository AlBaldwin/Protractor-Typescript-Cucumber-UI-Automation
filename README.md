# ProtractorTypeScriptTestFramework:

Initial dependency setup

Page-object model implementation

Cucumber integration

Chai- Assertions

Handing the promise 

NPM Run configuration

Reporting
Capturing Screenshots

TODO: Continuous integration with Jenkins


### Page object class example

 ```
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
```

### Page object Step definition 

```
import { Given, When, Then } from "cucumber";
import { Calculator } from "../pageObjects/calculator";
import { async } from "q";
import { browser } from "protractor";
import chai from "chai";

var expect = chai.expect;
let calc = new Calculator();

Given('a web browser is on the calculation website',  async()=> {
    await calc.navigateTo();
  });

  When('the user adds two numbers {string} and {string}', async(string, string2)=> {
    await calc.firstEditBox(string);
    await calc.add();
    await calc.secondEditBox(string2);
  });

  When('the user subtracts two numbers {string} and {string}', async (string, string2)=> {
    await calc.firstEditBox(string);
    await calc.subtract();
    await calc.secondEditBox(string2);
  });

  When('the user multiplies two numbers {string} and {string}', async (string, string2)=> {
    await calc.firstEditBox(string);
    await calc.multiply();
    await calc.secondEditBox(string2);
  });

  Then('the output displays {string}', async (string) =>{
    await calc.go();
    await calc.getResult().then(function(text){
      expect(text).to.equal(string);

    })
  });

```

### Feature file

```

Feature: Calculator 

   Add minus and times functionality

   Scenario: Calculator Add function

   Given a web browser is on the calculation website
   When the user adds two numbers "3" and "5"
   Then the output displays "8"

   Scenario: Calculator minus function

   Given a web browser is on the calculation website
   When the user subtracts two numbers "16" and "1"
   Then the output displays "15"

   Scenario: Calculator times function

   Given a web browser is on the calculation website
   When the user multiplies two numbers "2" and "16"
   Then the output displays "32"

```





