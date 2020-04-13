"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Calculator {
    navigateTo() {
        return protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    }
    firstEditBox(value) {
        return protractor_1.element(protractor_1.by.model("first")).sendKeys(value);
    }
    secondEditBox(value) {
        return protractor_1.element(protractor_1.by.model("second")).sendKeys(value);
    }
    go() {
        return protractor_1.element(protractor_1.by.id("gobutton")).click();
    }
    getResult() {
        return protractor_1.element(protractor_1.by.css("td:nth-child(3)")).getText();
    }
    add() {
        return protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css('[value="ADDITION"]')).click();
    }
    subtract() {
        return protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css('[value="SUBTRACTION"]')).click();
    }
    multiply() {
        return protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css('[value="MULTIPLICATION"]')).click();
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2NhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBaUU7QUFFakUsTUFBYSxVQUFVO0lBR25CLFVBQVU7UUFDTixPQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFpQixDQUFDO0lBQ25GLENBQUM7SUFFSCxZQUFZLENBQUMsS0FBSztRQUNkLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBaUIsQ0FBQztJQUN0RSxDQUFDO0lBQ0QsYUFBYSxDQUFDLEtBQUs7UUFDZixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQWlCLENBQUM7SUFDdkUsQ0FBQztJQUNELEVBQUU7UUFDRSxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBa0IsQ0FBQztJQUM5RCxDQUFDO0lBRUQsU0FBUztRQUNMLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQWtCLENBQUM7SUFDeEUsQ0FBQztJQUVELEdBQUc7UUFDQyxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQWtCLENBQUM7SUFDdkcsQ0FBQztJQUVELFFBQVE7UUFDSixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQWtCLENBQUM7SUFDMUcsQ0FBQztJQUNELFFBQVE7UUFDSixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQWtCLENBQUM7SUFDN0csQ0FBQztDQUdKO0FBakNELGdDQWlDQyJ9