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
const protractor_2 = require("protractor");
describe('Open Angular js website', function () {
    it('Open Angular js website', () => __awaiter(this, void 0, void 0, function* () {
    }));
    it('Angular home page title validation', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angular.io/");
        yield protractor_2.element(protractor_1.by.css("a[href='https://angular.io/]'")).click();
        yield protractor_2.element(protractor_1.by.css("input[type='search']")).sendKeys("hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdGVzdHNwZWMyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBdUM7QUFDdkMsMkNBQW1DO0FBR25DLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRTtJQUVoQyxFQUFFLENBQUMseUJBQXlCLEVBQUUsR0FBTyxFQUFFO0lBR3ZDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsb0NBQW9DLEVBQUMsR0FBTyxFQUFFO1FBQzdDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN6QyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0QsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVwRSxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFDLENBQUEifQ==