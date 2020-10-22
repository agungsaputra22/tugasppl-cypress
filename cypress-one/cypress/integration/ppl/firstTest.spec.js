/// <reference types="cypress" />
describe('From input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline Forms',() => {
        cy.get('input[placeholder="Jane Doe"]').type('Agung Saputra')
        cy.get('[placeholder ="Email"][type="text"]').type('agungsaputraa948@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Using Grid',()=> {
        cy.get('#inputEmail1').type('agungsaputraa948@gmail.com')
        cy.get('#inputPassword2').type('Agung123456')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    })

    it('Basic Form',()=> {
        cy.get('#exampleInputEmail1').type('agungsaputraa948@gmail.com')
        cy.get('#exampleInputPassword1').type('Agung123456')
        cy.get('.text').contains('Check me out').click()
    })

    it('Form Without Labels',()=>{
        cy.get('[placeholder="Recipients"]').type('Agung Saputra')
        cy.get('[placeholder="Subject"]').type('BlackBoxTesting PPL')
        cy.get('[placeholder="Message"').type('Assalamualaikum')
    })

    it('Block Form',()=>{
        cy.get('#inputFirstName').type('Agung Saputra')
        cy.get('#inputLastName').type('Saputra')
        cy.get('#inputEmail').type('agungsaputraa948@gmail.com')
        cy.get('#inputWebsite').type('www.tulungagung.com')
    })

    it('Horizontal Form',()=> {
        cy.get('#inputEmail3').type('agungsaputraa948@gmail.com')
        cy.get('#inputPassword3').type('Agung123456')
        cy.get('.custom-checkbox').last().click()
    })

});