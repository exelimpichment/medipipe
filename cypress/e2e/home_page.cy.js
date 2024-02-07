describe('SignIn page', () => {
  it('should stubLogin', () => {
    cy.visit('/');
    cy.stubLogin();

    // assert that log out button is visible
  });
});
