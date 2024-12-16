

describe('My First Test', () => {
  
 it('Verifying GUI elements', () => {
// visit the webpage and verifying the title
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.title().should('eq','Automation Testing Practice')


//Verifying all buttons on the webpage

    //check for the visibility of the "Submit" button
    cy.get('.submit-btn').should('be.visible')
    .and('not.be.disabled')
    //"Submit" button is clickable
    cy.get('.submit-btn').click();

    //Check for the visibility of the "Start" button
    cy.get('.start').should('be.visible')
    .and('not.be.disabled')
    //"Start" button is clickable
    cy.get('.start').click();

    //Check for the visibility of the "PointMe" button
    cy.get('.dropbtn').should('be.visible')
    .and('not.be.disabled');
    //"PointMe" button is clickable
    cy.get('.dropbtn').click();
  
    //Checking if "Single file" upload buttons are clickable
    cy.get('#singleFileInput').click() //If choose file button is clickable
    cy.get('#singleFileForm > button').click() //upload single file button

    //Checking if "Multiple file" upload buttons are clickable
    cy.get('#multipleFilesInput').click() //If the choose file button is clickable
    cy.get('#multipleFilesForm > button')
    .click() //Initiate a click
    
   //.should('text', 'eq', '');

   cy.get('#Wikipedia1_wikipedia-search-input').should('be.visible') //search visibility
   .click() //initiate a click
   .type('how are you')

   cy.get('.wikipedia-search-button').should('be.visible')
   .click() //initiate a click

   //Alert button
   cy.get('#alertBtn').click() // Simulate the button click that triggers the alert
   cy.on('window:alert', (text) => {
    expect(text).to.equal('I am an alert box!');
  });

  //Confirm button
  cy.get('#confirmBtn').click() // Simulate the button click that triggers the confirm
  cy.on('window:confirm', (text) => {
    expect(text).to.equal('Press a button!');
  });
  
  cy.get('#promptBtn').click()
  cy.on('window:prompt', (text) => {
    expect(text).to.equal('Please enter your name');
  })
  cy.type('Harry Potter');


  });


  it('All input fields on the webpage', () => {
    // visit the webpage and verifying the title
    cy.visit("https://testautomationpractice.blogspot.com/")

    // Check if the input field is enabled
        //Name input field verification
        cy.get('#name').should('be.enabled')
        .type('testuser')
        .should('have.value', 'testuser'); //Name

    //Email input field verification
        cy.get('#email').should('be.enabled') 
        .type('testuser@gmail.com')
        .should('have.value', 'testuser@gmail.com');

        //Phone input field verification
        cy.get('#phone')
        .should('be.enabled') //check that the field is enabled
        //.invoke('0816425378') // Get the value of the input field
        //.should('have.length', 11); // Verify the value is exactly 11 characters long
        .type('0816425378')
        .should('have.value', '0816425378')
        //.should('match', '0816425378'); // Verify the value is exactly 11 digits;

        //Address input field verification
        cy.get('#textarea').should('be.enabled')
        .type('123, Jalan test')
        .should('have.value', '123, Jalan test');

  })

it('Checking for the functionalities of the checkboxes', () => {
//visit the page first
cy.visit('https://testautomationpractice.blogspot.com/')

  // Verify the visibility of the checkbox
  cy.get('#sunday').should('be.visible');

  // Check the checkbox and verify it is checked
  cy.get('#sunday').check().should('be.checked');

  // Uncheck the checkbox and verify it is unchecked
  cy.get('#sunday').uncheck().should('not.be.checked');

  // Check all checkboxes within the form group and verify they are checked
  cy.get('.form-group input[type="checkbox"]').check().should('be.checked');

  //Uncheck all checkboxes within the form group and verify they are checked
  cy.get('.form-group input[type="checkbox"]').uncheck().should('not.be.checked');

});

it('Checking for the functionalities of radio buttons', () => {
  //visit the page first
  cy.visit('https://testautomationpractice.blogspot.com/')

  //verify if radio buttons are visible and cickable
  cy.get('#male').click ().should('be.visible') 
  cy.get('#female').click ().should('be.visible')
  //cy.get('#female').should('not.be.enabled')
  
});

it('Checking for the functionalities of dropdown buttons', () => {
  //visit the page first
  cy.visit('https://testautomationpractice.blogspot.com/')

  // Check if the dropdown is present
  cy.get('#country').should('exist')

  // Select an option from a dropdown
  cy.get('#comboBox') //find the input
  .click(); //open the dropdown

  // Select the desired option from the dropdown menu
  cy.get('#dropdown > :nth-child(1)')// Replace with the actual selector for the dropdown list
    .contains('Item 1') // Find the option by its visible text
    .click(); // Click to select it

  //select a colour from colour list
  cy.get('[value="yellow"]').click()
  cy.get('#colors > :nth-child(5)').click()
  cy.get('[value="yellow"]').then((el) => {
   console.log(el); // Log the element to inspect its type and properties
 });

 //select animals from the list
 cy.get('#animals')
 cy.get('[value="dog"]').click()
 cy.get('[value="giraffe"]').click()

  //Verify if the datepicker field is clickable
  cy.get('#datepicker').click()

 // Navigate to the desired month/year (if needed)
 cy.get('.ui-datepicker-next > .ui-icon').click() 

 // Select the specific date (e.g., 25th of the month)
 cy.get(':nth-child(4) > :nth-child(4) > .ui-state-default').click() 

 // Verify the selected date is correctly displayed in the input field
 cy.get('#datepicker').should('have.value', '12/25/2024');

//Verify the datepicker 2 field is clickable
cy.get('#txtDate').click()

 // Navigate to the desired month/year (if needed)
 cy.get('.ui-datepicker-prev > .ui-icon')

 // Select the specific date (e.g., 25th of the month)
 cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click() 

 // Verify the selected date is correctly displayed in the input field
 cy.get('#datepicker').should('have.value', '12/25/2024');
})


})