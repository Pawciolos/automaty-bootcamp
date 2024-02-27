/// <reference types = "cypress" />

import { login, password } from "../fixtures/loginData.json"

describe("Commends", ()=> {
    it("logowanie do strony", ()=> {
        cy.login(login,password)
    })
    
})