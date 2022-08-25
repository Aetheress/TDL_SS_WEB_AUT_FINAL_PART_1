import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";
import ItemPage from "../pageObjects/Item.page";

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
      HomePage.priceOfItemAtIndex(1).should("have.text", "$49.99")
    })
    //Scenario 5
    it("Sort items - Price low to high", () => {
      HomePage.filter.select("Price (low to high)");
      HomePage.nameOfItemAtIndex(1).should("have.text", "Sauce Labs Onesie");
      HomePage.priceOfItemAtIndex(1).should("have.text", "$7.99");
    })
    //Scenario 6
    it("Sort items - Name (Z to A)", () => {
      HomePage.filter.select("Name (Z to A)");
      HomePage.nameOfItemAtIndex(1).should("have.text", "Test.allTheThings() T-Shirt (Red)");
    })
    //Scenario 7
    it("Validate shopping cart badge amount", () => {
      HomePage.itemOfName("Sauce Labs Bolt T-Shirt").click();
      ItemPage.addToCart.click();
      ItemPage.shoppingCartBadge.should("have.text", 1);
      ItemPage.back.click();
      HomePage.itemOfName("Sauce Labs Bike Light").click();
      ItemPage.addToCart.click();
      ItemPage.shoppingCartBadge.should("have.text", 2);
    });
    //Scenario 8
    it("Reset App State", () => {
      HomePage.itemOfName("Sauce Labs Bolt T-Shirt").click();
      ItemPage.addToCart.click();
      ItemPage.back.click();
      HomePage.shoppingCartBadge.should("have.text", 1);
      HomePage.menu.click();
      HomePage.reset.click();
      HomePage.shoppingCartBadge.should("not.exist");
    })
  })
});
