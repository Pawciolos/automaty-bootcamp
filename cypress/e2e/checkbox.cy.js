/// <reference types = "cypress" />

import Base from "../pages/Base";
import Home from "../pages/Home";
import Women from "../pages/Women";

describe("zaznaczanie chceckbox", ()=> {
    it("klikniecie w zakaldke women", ()=>{
        Base.openHomePage();
        Home.clickonWomenTab();
        cy.url().should("include", "id_category=3&controller=category")

    })
    it("zaznaczenie checkboxa w zakldce women", ()=>{
        Women.checkTops();
        cy.get("#layered_category_4").should("be.checked")
        Women.checkdress();
        Women.checkSize;
        


    })
})