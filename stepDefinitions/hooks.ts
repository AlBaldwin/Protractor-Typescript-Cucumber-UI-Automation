import { After, Before, Status } from "cucumber";
import { browser } from "protractor";

After(async function (scenario) {

    if (scenario.result.status === Status.FAILED) {
      const screenshot = await browser.takeScreenshot();
  
      this.attach(screenshot, "image/png");
    }
  
  });