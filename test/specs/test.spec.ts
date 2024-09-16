import { expect } from "@wdio/globals";

describe("Cermati Registration", () => {
  it("[key: TC-T1]should successfully register an account with valid input", async () => {
    // Navigate to the registration page
    await browser.url("https://www.cermati.com/gabung");

    // Input valid phone number
    const phoneNumberInput = await $("#mobilePhone");
    await phoneNumberInput.setValue("081234567890");

    // Input valid email address
    const emailInput = await $("#email");
    await emailInput.setValue("testuser@example.com");

    // Input valid first name
    const firstNameInput = await $("#firstName");
    await firstNameInput.setValue("John");

    // Input valid last name
    const lastNameInput = await $("#lastName");
    await lastNameInput.setValue("Doe");

    const registerButton = await $('[data-button-name="register-new"]');
    await registerButton.click();

    const recaptchaFrame = await $('iframe[title="reCAPTCHA"]');

    await expect(recaptchaFrame).toBeDisplayed();
  });
});
