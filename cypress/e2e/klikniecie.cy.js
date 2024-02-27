/// <reference types = "cypress" />

describe("klikniecie w przycisk `kontakt us`", ()=> {
    it("kliknicie w zakladke", ()=>{
        cy.visit("/");
        cy.get(`a[title="Contact us"]`).click();
    })


})