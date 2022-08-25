import BasePage from "./Base.page";

class ShoppingCartPage extends BasePage {
    static get checkout() {
        return cy.get(`#checkout`);
    }
}

export default ShoppingCartPage;