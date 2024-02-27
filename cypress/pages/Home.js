class Home {

    get womenTab(){
        return cy.get(`a[title="Women"]`)
    }


    clickonWomenTab() {
        this.womenTab.click();
    }

}
export default new Home ();