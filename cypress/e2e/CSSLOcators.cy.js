
describe("CSSLocators", function() {

it("csslocators", function() {

cy.visit("https://www.ardilla.africa/")
 
cy.get(".__className_cd6bff").contains("Have you saved?")



})

})