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
const angularHomePage_1 = require("../pageObjects/angularHomePage");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
var ang = new angularHomePage_1.angularHomePage();
cucumber_1.Given('a web browser is on the Angular Js website', () => __awaiter(this, void 0, void 0, function* () {
    yield ang.navigateTo();
}));
cucumber_1.Given('the user clicks the header link', () => __awaiter(this, void 0, void 0, function* () {
    yield ang.angularFeaturesLinkClick();
}));
cucumber_1.Given('the user is directed to the angular features page', () => __awaiter(this, void 0, void 0, function* () {
    yield ang.title();
}));
cucumber_1.When('the user enters {string} in the search box', (string) => __awaiter(this, void 0, void 0, function* () {
    yield ang.search(string);
}));
cucumber_1.Then('the text {string} is returned', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
}));
cucumber_1.Then('the link {string} is returned', (link) => __awaiter(this, void 0, void 0, function* () {
    yield ang.linkReturned(link);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhclN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2FuZ3VsYXJTdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLG9FQUFpRTtBQUVqRSxnREFBd0I7QUFHeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLEdBQUcsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUVoQyxnQkFBSyxDQUFDLDRDQUE0QyxFQUFFLEdBQVEsRUFBRTtJQUMxRCxNQUFNLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUV6QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxpQ0FBaUMsRUFBRSxHQUFRLEVBQUU7SUFDakQsTUFBTSxHQUFHLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztBQUN2QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxtREFBbUQsRUFBRSxHQUFRLEVBQUU7SUFDbkUsTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDcEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0Q0FBNEMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ2pFLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLCtCQUErQixFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDcEQsb0VBQW9FO0lBQ3BFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBTyxJQUFJLEVBQUUsRUFBRTtJQUNuRCxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9