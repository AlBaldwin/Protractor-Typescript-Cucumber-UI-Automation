"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class angularHomePage {
    navigateTo() {
        return protractor_1.browser.get('https://angular.io/');
    }
    angularFeaturesLinkClick() {
        return protractor_1.element(protractor_1.by.css("[title='Features']")).click();
    }
    angularLinkDisplays() {
        return protractor_1.element(protractor_1.by.linkText("angular.io")).isDisplayed();
    }
    search(string) {
        return protractor_1.element(protractor_1.by.css("input[type='search']")).sendKeys(string);
    }
    title() {
        return protractor_1.element(protractor_1.by.css('#features--benefits')).isDisplayed();
    }
    linkReturned(string) {
        return protractor_1.element(protractor_1.by.linkText(string)).isDisplayed();
    }
}
exports.angularHomePage = angularHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvYW5ndWxhckhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQW9FO0FBRXBFLE1BQWEsZUFBZTtJQUV4QixVQUFVO1FBQ04sT0FBTyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBaUIsQ0FBQztJQUM1RCxDQUFDO0lBRUgsd0JBQXdCO1FBQ3BCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQWtCLENBQUM7SUFDekUsQ0FBQztJQUVELG1CQUFtQjtRQUNmLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFrQixDQUFDO0lBQzVFLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTTtRQUNULE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFpQixDQUFDO0lBQ3BGLENBQUM7SUFFRCxLQUFLO1FBQ0QsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBa0IsQ0FBQTtJQUMvRSxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQU07UUFDZixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBa0IsQ0FBQTtJQUNyRSxDQUFDO0NBRUo7QUExQkQsMENBMEJDIn0=