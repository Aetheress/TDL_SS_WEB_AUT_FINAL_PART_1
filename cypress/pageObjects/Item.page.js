import BasePage from "./Base.page";

class ItemPage extends BasePage {
    static get addToCart() {
        return cy.get(`.btn_inventory`).contains("Add to cart");
    }
    static get shoppingCartBadge() {
        return cy.get(`.shopping_cart_badge`);
    }
    static get back() {
        return cy.get(`#back-to-products`);
    }
    static get remove() {
        return cy.get(`.btn_inventory`).contains("Remove");
    }
    static get shoppingCart() {
        return cy.get(`.shopping_cart_link`);
    }
}

export default ItemPage;