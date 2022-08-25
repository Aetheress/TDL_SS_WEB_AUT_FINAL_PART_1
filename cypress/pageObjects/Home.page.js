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

  //if no parameter supplied, looks at first item
  //i'm still gonna supply it though
  static nameOfItemAtIndex(i=1) {
    return cy.get(`.inventory_item:nth-child(${i}) .inventory_item_name`);
  }

  static priceOfItemAtIndex(i) {
    return cy.get(`.inventory_item:nth-child(${i}) .inventory_item_price`);
  }

  static itemOfName(name) {
    return cy.get(`.inventory_item_name`).contains(name);
  }

  static get shoppingCartBadge() {
    return cy.get(`.shopping_cart_badge`); 
  }

  static get menu() {
    return cy.get(`#react-burger-menu-btn`);
  }

  static get reset() {
    return cy.get(`#reset_sidebar_link`);
  }

}

export default HomePage;
