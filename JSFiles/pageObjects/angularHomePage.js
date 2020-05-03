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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const pageObjects_1 = require("../locators/pageObjects");
class angularHomePage {
    navigateTo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get('https://angular.io/');
        });
    }
    angularFeaturesLinkClick() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.css(pageObjects_1.AngularSelectors.FEATURES_LINK)).click();
        });
    }
    angularLinkDisplays() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.linkText(pageObjects_1.AngularSelectors.FEATURES_LINK)).isDisplayed();
        });
    }
    search(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.css(pageObjects_1.AngularSelectors.SEARCH_TB)).sendKeys(text);
        });
    }
    title() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.css(pageObjects_1.AngularSelectors.TITLE)).isDisplayed();
        });
    }
    linkReturned(link) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.linkText(link)).isDisplayed();
        });
    }
}
exports.angularHomePage = angularHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvYW5ndWxhckhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9FO0FBQ3BFLHlEQUEyRDtBQUUzRCxNQUFhLGVBQWU7SUFFbEIsVUFBVTs7WUFDWixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUFBO0lBRUcsd0JBQXdCOztZQUMxQixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xFLENBQUM7S0FBQTtJQUVLLG1CQUFtQjs7WUFDckIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsOEJBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3RSxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsSUFBWTs7WUFDckIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckUsQ0FBQztLQUFBO0lBRUssS0FBSzs7WUFDUCxNQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pFLENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBQyxJQUFZOztZQUMzQixNQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELENBQUM7S0FBQTtDQUVKO0FBMUJELDBDQTBCQyJ9