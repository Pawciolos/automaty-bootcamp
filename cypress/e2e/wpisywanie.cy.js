/// <reference types = "cypress" />

import Base from "../pages/Base";
import Search_box from "../pages/Search_box";
import { searchPhrase, notFoundProduct } from "../fixtures/dotestow.json"

describe("wpisywanie tekstu w wsyzukiwarke", () => {
    it("wpisywanie tekstu", ()=> {
        Base.openHomePage();
        Search_box.typeSearchPrhase(searchPhrase);
        Search_box.SearchBox.should("have.value", searchPhrase);
        cy.wait(3000)
        cy.get("#search_query_top").clear();
        cy.wait(3000)
        cy.get("#search_query_top").type(`${searchPhrase} {enter}`);
        cy.get("p.alert").should("be.visible").and('include.text', notFoundProduct)
        Search_box.SearchBox.should("have.class", "search_query")
        Search_box.SearchBox.should("have.css", "margin-right", "1px")
    })
})