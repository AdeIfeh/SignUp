describe ("New Covenant Church Website", function () {
it('Homepage', function (){
  cy.visit('https://nccmagboro.org/')

  cy.get('#slider-1-slide-20-layer-16').click();
  //cy.get('.selected > label > .amount').click();
  cy.get('.donation-amounts > :nth-child(7) > label').click()
  cy.get('#charitable_field_first_name_element').click()
  .type("joseph")
  cy.get('#charitable_field_last_name_element').click().type("joseph")
  cy.get('#charitable_field_email_element').click().type("josephoadagba@gmail.com")
  cy.get('select', { timeout:6000})
  .select('Togo')
  cy.get('#charitable_field_phone_element').click().type("08064261439")
  cy.get('.charitable-submit-field > .button').click()
})


})


