import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";

describe("Swag Labs", () => {
  beforeEach(() => {
    LoginPage.visit();
  });
  //Scenario 1
  it("Login with locked out user", () => {
    LoginPage.username.type("locked_out_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.login.click();
    LoginPage.error.should("have.text", "Epic sadface: Sorry, this user has been locked out.");
  });
  //Scenario 2
  it("Login with wrong password", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("the_sauce_that_everyone_knows");
    LoginPage.login.click();
    LoginPage.error.should("have.text", "Epic sadface: Username and password do not match any user in this service");
  });


  context("Actions after logging in", () => {
    beforeEach(()=> {
      LoginPage.username.type("standard_user");
      LoginPage.password.type("secret_sauce");
      LoginPage.login.click();
    })
    //Scenario 3
    it("Validate item amount", () => {
      HomePage.items.should("have.length", 6);
    });
    //Scenario 4
    it("Sort items - Price high to low", () => {
      HomePage.filter.select("Price (high to low)");
      HomePage.nameOfItemAtIndex(1).should("have.text", "Sauce Labs Fleece Jacket");
    })
  })
});
