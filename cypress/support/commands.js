Cypress.Commands.add("validateElementText", (selector, expectedText) => {
    selector.should("contain.text", expectedText);
  });
    
  Cypress.Commands.add("clickButton",(selector)=>{
    selector.click();
});  

// Cypress.Commands.add("countries", (countryName) => {
//     cy.get('input[placeholder="Type to Select Countries"]').clear().type(countryName);
    
//   });

Cypress.Commands.add("selectDropdown", (selector, optionText) => {
  selector.click()
  selector.clear();
  selector.type(optionText);

  cy.get('.dropdown-menu li') 
    .should('be.visible')
    .each(($el) => {
      if ($el.text().trim() === optionText) {
        cy.wrap($el).click();
      }
    });
});

//   Cypress.Commands.add("selectDropdown", (selector, option) => {
//   cy.get(selector).select(option);
// });






// Cypress.Commands.add("enterCredentials", (username, password) => {
//     cy.get('input[name="username"]').clear().type(username);
//     cy.get('input[id="password"]').clear().type(password);
//   });