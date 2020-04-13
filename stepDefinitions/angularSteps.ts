import { Given, When, Then } from "cucumber";
import { angularHomePage } from "../pageObjects/angularHomePage";

import chai from "chai";


var expect = chai.expect;
var ang = new angularHomePage();

Given('a web browser is on the Angular Js website', async ()=> {
    await ang.navigateTo();

  });

  Given('the user clicks the header link', async ()=> {
    await ang.angularFeaturesLinkClick();
  });

  Given('the user is directed to the angular features page', async ()=> {
    await ang.title();
  });

  When('the user enters {string} in the search box', async (string)=> {
    await ang.search(string);
  });

  Then('the text {string} is returned', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('the link {string} is returned', async (link) => {
    await ang.linkReturned(link);
  });
