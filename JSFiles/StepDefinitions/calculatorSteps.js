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
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new calculator_1.Calculator();
cucumber_1.Given('a web browser is on the calculation website', () => __awaiter(this, void 0, void 0, function* () {
    yield calc.navigateTo();
}));
cucumber_1.When('the user adds two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield calc.firstEditBox(string);
    yield calc.add();
    yield calc.secondEditBox(string2);
}));
cucumber_1.When('the user subtracts two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield calc.firstEditBox(string);
    yield calc.subtract();
    yield calc.secondEditBox(string2);
}));
cucumber_1.When('the user multiplies two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield calc.firstEditBox(string);
    yield calc.multiply();
    yield calc.secondEditBox(string2);
}));
cucumber_1.Then('the output displays {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield calc.go();
    yield calc.getResult().then(function (text) {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvclN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2NhbGN1bGF0b3JTdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDBEQUF1RDtBQUd2RCxnREFBd0I7QUFFeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUU1QixnQkFBSyxDQUFDLDZDQUE2QyxFQUFHLEdBQU8sRUFBRTtJQUMzRCxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlEQUFpRCxFQUFFLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQzlFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxNQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNqQixNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxzREFBc0QsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUNwRixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEIsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsdURBQXVELEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDckYsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RCLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDcEQsTUFBTSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDaEIsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVoQyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==