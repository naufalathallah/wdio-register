import { $ } from "@wdio/globals";
import Page from "./page";

class LoginPage extends Page {
  get inputMobilePhone() {
    return $("#mobilePhone");
  }

  get inputEmail() {
    return $("#email");
  }

  get inputFirstName() {
    return $("#firstName");
  }

  get inputLastName() {
    return $("#lastName");
  }

  get btnBuat() {
    return $('[data-button-name="register-new"]');
  }

  get iframeReCAPTCHA() {
    return $('iframe[title="reCAPTCHA"]');
  }

  async fillRegisterForm(mobilePhone: string, email: string, firstName: string, lastName: string) {
    await this.inputMobilePhone.setValue(mobilePhone);
    await this.inputEmail.setValue(email);
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
  }

  async submitForm() {
    await this.btnBuat.click();
  }

  open() {
    return super.open("gabung");
  }
}

export default new LoginPage();
