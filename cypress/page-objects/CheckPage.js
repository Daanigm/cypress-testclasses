export class Example1Page{

    checkElements(number5) {
        cy.get('li').should('have.length', 5)

    }

    


}