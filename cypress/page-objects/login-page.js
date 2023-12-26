/// <reference types="cypress" />

export class LoginPage {

    enterUser(text) {

       cy.get('#username').type(text)
    }


    enterPassword(text) {


        cy.get('#password').type(text)
        
        
    }

    clickLogin() {

        cy.get('.fa').click()
    }
    
}
