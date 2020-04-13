import { ElementFinder, element, by, $, browser } from "protractor";

export class angularHomePage
{
    navigateTo() {
        return browser.get('https://angular.io/') as Promise<any>;
      }

    angularFeaturesLinkClick() {
        return element(by.css("[title='Features']")).click() as Promise<any>;
    }

    angularLinkDisplays() {
        return element(by.linkText("angular.io")).isDisplayed() as Promise<any>;
    }

    search(string) {
        return element(by.css("input[type='search']")).sendKeys(string) as Promise<any>;
    }

    title() {
        return element(by.css('#features--benefits')).isDisplayed() as Promise<any>
    }

    linkReturned(string){
        return element(by.linkText(string)).isDisplayed() as Promise<any>
    }

}