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
const angularHomePage_1 = require("../pageObjects/angularHomePage");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
var ang = new angularHomePage_1.angularHomePage();
cucumber_1.Given('a web browser is on the Angular Js website', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ang.navigateTo();
}));
cucumber_1.Given('the user clicks the header link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ang.angularFeaturesLinkClick();
}));
cucumber_1.Given('the user is directed to the angular features page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ang.title();
}));
cucumber_1.When('the user enters {string} in the search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield ang.search(string);
}));
cucumber_1.Then('the text {string} is returned', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
}));
cucumber_1.Then('the link {string} is returned', (link) => __awaiter(void 0, void 0, void 0, function* () {
    yield ang.linkReturned(link);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhclN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2FuZ3VsYXJTdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QyxvRUFBaUU7QUFFakUsZ0RBQXdCO0FBR3hCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFFaEMsZ0JBQUssQ0FBQyw0Q0FBNEMsRUFBRSxHQUFRLEVBQUU7SUFDMUQsTUFBTSxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7QUFFekIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsaUNBQWlDLEVBQUUsR0FBUSxFQUFFO0lBQ2pELE1BQU0sR0FBRyxDQUFDLHdCQUF3QixFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsbURBQW1ELEVBQUUsR0FBUSxFQUFFO0lBQ25FLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNENBQTRDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUNqRSxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ3BELG9FQUFvRTtJQUNwRSxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLCtCQUErQixFQUFFLENBQU8sSUFBSSxFQUFFLEVBQUU7SUFDbkQsTUFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==