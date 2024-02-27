class Women {

    get topsCheckbox (){
        return cy.get("#layered_category_4")
    }

    get dressChceckbox (){
        return cy.get("#layered_category_8")
    }

    get sizeCheckbox (){
        return cy.get("#ul_layered_id_attribute_group_1 input")
    }

    checkTops() {
        this.topsCheckbox.click()
    }
    checkdress() {
        this.dressChceckbox.click()   
    }

   checkSize () {
    this.sizeCheckbox.click()
   }

}

export default new Women ();