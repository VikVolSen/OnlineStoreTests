class HomePageObject {

    get searchField() {
        return  cy.get('[placeholder="Пошук"]');
    }

    get searchBtn() {
        return cy.get('div.buttons>[type="submit"]');
    }

    assertSearchFieldVisible() {
        this.searchField
            .should('be.visible')
    }

    assertSearchBtnVisible() {
        this.searchBtn
            .should('be.visible')
    }

    typeSearchItem(searchItem) {
        this.searchField
            .type(searchItem);
    }

    clickSearchBth() {
        this.searchBtn
            .click()
    }
   
}

export default HomePageObject;