import { expect } from "@wdio/globals";
import gabungPage from "../pageobjects/gabung.page";
import { defaultData } from "../data/default.data";

describe("Cermati Registration", () => {
  before(async () => {
    await gabungPage.open();
  });

  it("[key: TC-T1] should successfully register an account with valid input", async () => {
    await gabungPage.fillRegisterForm(defaultData.noHp, defaultData.email, defaultData.firstName, defaultData.lastName);
    await gabungPage.submitForm();

    await expect(gabungPage.iframeReCAPTCHA).toBeDisplayed();
  });
});
