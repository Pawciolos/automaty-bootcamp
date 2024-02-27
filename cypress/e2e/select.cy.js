/// <reference types = "cypress" />

describe("sortowanie", ()=> {
    it("klikniecie w zakaldke women", ()=>{
        cy.visit("/");
        cy.get(`a[title="Women"]`).click();
        cy.url().should("include", "id_category=3&controller=category")

    })
    it("filtorwanie, wybranie filtra in stock", ()=> {
        cy.get("#selectProductSort").select("In stock")
        cy.get("#selectProductSort").should("have.value", "quantity:desc")
    })

    it("filtorwanie, wybranie filtra od A do Z", ()=> {
        cy.get("#selectProductSort").select("name:asc") //po wartosci
        cy.get("#selectProductSort").should("have.value", "name:asc")
    })
})