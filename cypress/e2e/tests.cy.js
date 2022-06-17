// // https://docs.cypress.io/api/introduction/api.html

// describe('My First Test', () => {
//   beforeEach(() => {
//     cy.viewport('iphone-5');
//   });


//   it('Visits the app root url', () => {
//     cy.clock();
//     cy.visit('/')
//     cy.tick();
//     cy.contains('ion-content', 'Tab 1 page')
//   })
// })

describe('Mobile App Testing', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.visit('/');
  })

  it('visits the app root url', () => {
    cy.contains('ion-content', 'Tab 1 page');
  });
});