describe('Web App Test', () => {
  
    it('Start page successfully loads', () => {
      cy.visit('/');
    });
  
    it('Start page shows right content', () => {
      cy.visit('/health');
    });
  
    // it('App uses PostgreSQL', () => {
    //   cy.visit('/db-data');
    // });
  });