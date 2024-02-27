import { searchPhrase } from"../fixtures/dotestow.json"


class Search_box {
    get SearchBox (){
       return cy.get("#search_query_top")
    }

    typeSearchPrhase () {
        this.SearchBox.type(searchPhrase)
    }

}
    



export default new Search_box ();