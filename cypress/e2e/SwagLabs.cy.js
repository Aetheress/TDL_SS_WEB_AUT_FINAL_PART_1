import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";

describe("Swag Labs", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Login with locked out user", () => {
    LoginPage.username.type("locked_out_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.login.click();
    LoginPage.error.should("have.text", "Epic sadface: Sorry, this user has been locked out.");
  });
  it.only("Login with wrong password", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("the_sauce_that_everyone_knows");
    LoginPage.login.click();
    LoginPage.error.should("have.text", "Epic sadface: Username and password do not match any user in this service");
  });
});
