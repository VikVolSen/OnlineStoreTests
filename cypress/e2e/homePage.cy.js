/// <reference types="cypress" />

import HomePageObject from '../support/pages/home.pageObject';
import ItemsCatalogPageObject from '../support/pages/itemsCatalog.pageObject'

const homePage = new HomePageObject();
const itemsCatalog = new ItemsCatalogPageObject();

const testData = {
  validItem: 'iPhone 14'
};

describe('Tests for not logged in user', () => {

  beforeEach(() => {
    cy.visit('/')
  });
  
  
  it('User is able to find valid item via Search input field', () => {
    homePage.assertSearchFieldVisible()
    homePage.typeSearchItem(testData.validItem);
    homePage.assertSearchBtnVisible()
    homePage.clickSearchBth()
    itemsCatalog.assertCatalogPageUrl()
    itemsCatalog.assertSearchResultItemName(testData.validItem)
  })

  it('User is able to register on the site with valid data', () => {
    
  });
})