class ItemsCatalogPageObject {

    get catalogPageUrl() {
        return  cy.url();
    }

    get searchResultItem() {
        return cy.get('div.product_item').eq(0);
    }

    assertCatalogPageUrl() {
        this.catalogPageUrl
            .should('include', '/catalog')
    }

    assertSearchResultItemName(itemName) {
        this.searchResultItem
            .should('be.visible')
            .should('contain.text', itemName)
    }
}

export default ItemsCatalogPageObject;