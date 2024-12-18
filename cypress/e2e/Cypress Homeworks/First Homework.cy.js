describe('Testing Demoqa ', () => {
    it('Add user testing', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.url().should('contain', 'demoqa')
        cy.get('#firstName').type('First Name1')
        cy.get('#lastName').type('last Name1')
        cy.get('#userEmail-wrapper').type('testmail@mail.ru')
        cy.get('#gender-radio-1').click({force: true})
        cy.get('#userNumber').type('37411111111')
        cy.get('#hobbies-checkbox-2').click({force: true})
        cy.get('#currentAddress').type('Current Address')
        cy.get('#submit').click()
        cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')

    })
})