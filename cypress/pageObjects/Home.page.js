import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  static get items() {
    return cy.get(`.inventory_item`);
  }

  static get filter() {
    return cy.get(`.product_sort_container`);
  }

  static nameOfItemAtIndex(i) {
    return cy.get(`.inventory_item:nth-child(${i}) .inventory_item_name`);
  }

  static priceOfItemAtIndex(i) {
    return cy.get(`.inventory_item:nth-child(${i}) .inventory_item_price`);
  }
}

export default HomePage;
