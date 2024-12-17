

describe('timba sign up page', () => {

  it('sign up using premium', () => {

    cy.visit('https://qa.timbaapps.com/')
    
    cy.get('.chakra-input').type('lizzygal78@gmail.com') //entering work email
    cy.get('form > .chakra-stack > .chakra-button').click() //verifying the sign up for free is clickable
    
    //verify the get started button under premium is visbile and clickable
    cy.get(':nth-child(3) > .chakra-button') //button is visible
    .click() //clickable

    //verify all input fields are visible and clickable

    //Verify First Name field
    cy.get('[id="field-:r0:"]').click() 
    .type('Elizabeth') //clickable

    //verify Last Name field
    //cy.get('[id="field-:r1:"]', { timeout: 10000 }) // waits up to 10 seconds
    //.click()
    //.type('Adesanya')

    //Company Name input field
    cy.get('[id="field-:r2:"]').click()
    .type('thestandardpeakcaters')

    //Email input field
    //cy.get('[id="field-:r3:"]').click().type('thestandardpeakcaters')

    //Phone Number field
    cy.get('[id="field-:r4:"]').click().type('09155669681')

    //Select the Country (Dropdown)
    cy.get('[id="field-:r5:"]').select('Algeria')
    .should('have.value','Algeria')

    //Address input field
    cy.get('[id="field-:r6:"]').click()
    .type('No 5, Ajinowo, Magboro')

    //Choose a subscription cycle
    cy.get('.css-9tjmdg').click()

    //Select the number of users
    cy.get('.css-1chmejh > :nth-child(1) > .chakra-stack > :nth-child(3)')
    .click() //to incraese the number
    cy.get('.css-1chmejh > :nth-child(1) > .chakra-stack > :nth-child(1)').click() //to reduce the number

    //Clicking on the Proceed button
    cy.get('.css-prqpkh > .chakra-button').click()

    //Verify the "Cancel" Button
    //cy.get('.css-12x90wi').click()

    //Verify the "Proceed to checkout" Button
    cy.get('.css-17maohs').click()

    //Verify the "Make Payment" Button
    cy.get('.css-mnqf94 > .chakra-button', {timeout: 80000}).click()  


  })


})