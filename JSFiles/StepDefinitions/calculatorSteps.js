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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObjects/calculator");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new calculator_1.Calculator();
cucumber_1.Given('a web browser is on the calculation website', () => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.navigateTo();
}));
cucumber_1.When('the user adds two numbers {string} and {string}', (first, second) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditBox(first);
    yield calc.add();
    yield calc.secondEditBox(second);
}));
cucumber_1.When('the user subtracts two numbers {string} and {string}', (first, second) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditBox(first);
    yield calc.subtract();
    yield calc.secondEditBox(second);
}));
cucumber_1.When('the user multiplies two numbers {string} and {string}', (first, second) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditBox(first);
    yield calc.multiply();
    yield calc.secondEditBox(second);
}));
cucumber_1.Then('the output displays {string}', (result) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.go();
    yield calc.getResult().then(function (text) {
        expect(text).to.equal(result);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvclN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2NhbGN1bGF0b3JTdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywwREFBdUQ7QUFFdkQsZ0RBQXdCO0FBRXhCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFFNUIsZ0JBQUssQ0FBQyw2Q0FBNkMsRUFBRyxHQUFPLEVBQUU7SUFDM0QsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDMUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxpREFBaUQsRUFBRSxDQUFNLEtBQWEsRUFBRSxNQUFjLEVBQUMsRUFBRTtJQUM1RixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDakIsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsc0RBQXNELEVBQUUsQ0FBTyxLQUFhLEVBQUUsTUFBYyxFQUFDLEVBQUU7SUFDbEcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RCLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHVEQUF1RCxFQUFFLENBQU8sS0FBYSxFQUFFLE1BQWMsRUFBQyxFQUFFO0lBQ25HLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QixNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFPLE1BQWMsRUFBRSxFQUFFO0lBQzVELE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2hCLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFaEMsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=