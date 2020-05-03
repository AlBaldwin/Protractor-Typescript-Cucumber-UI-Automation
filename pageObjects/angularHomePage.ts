import { ElementFinder, element, by, $, browser } from "protractor";
import { AngularSelectors } from "../locators/pageObjects";

export class angularHomePage
{
    async navigateTo() {
        await browser.get('https://angular.io/');
      }

    async angularFeaturesLinkClick(){
        await element(by.css(AngularSelectors.FEATURES_LINK)).click();
    }

    async angularLinkDisplays() {
        await element(by.linkText(AngularSelectors.FEATURES_LINK)).isDisplayed();
    }

    async search(text: string) {
        await element(by.css(AngularSelectors.SEARCH_TB)).sendKeys(text);
    }

    async title() {
        await  element(by.css(AngularSelectors.TITLE)).isDisplayed();
    }

    async linkReturned(link: string){
        await  element(by.linkText(link)).isDisplayed();
    }

}