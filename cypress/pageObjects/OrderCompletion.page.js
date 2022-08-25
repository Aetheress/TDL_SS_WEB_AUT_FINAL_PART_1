import BasePage from "./Base.page";

class OrderCompletionPage extends BasePage {
    static get message() {
        return cy.get(`.complete-header`);
    }
}

export default OrderCompletionPage;