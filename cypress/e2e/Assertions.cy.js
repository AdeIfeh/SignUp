
describe("Assertions demo", function() {

it("Implicit assertions", function() {

  cy.visit("https://www.ardilla.africa/")

  /*cy.url().should('include','ardilla.africa')
  .should('eq','https://www.ardilla.africa/')
  .should('contain','ardilla.africa')*/

  cy.url().should('include', 'ardilla.africa')
  .and('eq', 'https://www.ardilla.africa/')
  .and('contain', 'ardilla.africa')
  
  cy.title().should('include', 'Ardilla')
  .and('eq', 'Ardilla | Make a start')
  .and('contains', '| Make a start')

  cy.contains('Open main menu').should('be.visible').click()


})

it("explicit assertions", function() {
  cy.visit('https://www.ardilla.africa/')

  
})


})









