describe('Example.com', function () {
    it('contains Example Domain', function () {
        cy.visit('https://example.com/')
        cy.get('h1').should('have.text', 'Example Domain')
    })
})
