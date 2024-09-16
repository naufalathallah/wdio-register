import { expect } from "@wdio/globals";
import gabungPage from "../pageobjects/gabung.page";

describe("Cermati Registration", () => {
  before(async () => {
    await gabungPage.open();
  });

  it("[key: TC-T1] should successfully register an account with valid input", async () => {
    await gabungPage.fillRegisterForm("081234567890", "testuser@example.com", "John", "Doe");
    await gabungPage.submitForm();

    await expect(gabungPage.iframeReCAPTCHA).toBeDisplayed();
  });
});
