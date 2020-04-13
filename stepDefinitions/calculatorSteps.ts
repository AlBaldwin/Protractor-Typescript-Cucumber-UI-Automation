import { Given, When, Then } from "cucumber";
import { Calculator } from "../pageObjects/calculator";
import { browser } from "protractor";
import chai from "chai";

var expect = chai.expect;
let calc = new Calculator();

Given('a web browser is on the calculation website',  async()=> {
    await calc.navigateTo();
  });

  When('the user adds two numbers {string} and {string}', async(first: string, second: string)=> {
    await calc.firstEditBox(first);
    await calc.add();
    await calc.secondEditBox(second);
  });

  When('the user subtracts two numbers {string} and {string}', async (first: string, second: string)=> {
    await calc.firstEditBox(first);
    await calc.subtract();
    await calc.secondEditBox(second);
  });

  When('the user multiplies two numbers {string} and {string}', async (first: string, second: string)=> {
    await calc.firstEditBox(first);
    await calc.multiply();
    await calc.secondEditBox(second);
  });

  Then('the output displays {string}', async (result: number) =>{
    await calc.go();
    await calc.getResult().then(function(text){
      expect(text).to.equal(result);

    })
  });
