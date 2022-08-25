import BasePage from "./Base.page";

class LoginPage extends BasePage {
  static get url() {
    return "/";
  }

  static get username() {
    return cy.get("#user-name");
  }

  static get password() {
    return cy.get(`#password`);
  }

  static get login() {
    return cy.get(`#login-button`);
  }

  static get error() {
    return cy.get(`[data-test="error"]`);
  }
}

export default LoginPage;
