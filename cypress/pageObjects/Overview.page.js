import BasePage from "./Base.page";

class OverviewPage extends BasePage {
    static get items() {
        return cy.get(`.cart_list`);
    }
    static get finish() {
        return cy.get(`#finish`);
    }
}

export default OverviewPage;