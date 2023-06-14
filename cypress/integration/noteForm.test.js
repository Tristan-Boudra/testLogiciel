// cypress/integration/noteForm.spec.js

describe('NoteForm', () => {
    it('should create a new note', () => {
      cy.visit('/');
  
      cy.get('input[name="title"]').type('Test Note Title');
      cy.get('input[name="grade"]').type('10');
      cy.get('textarea[name="comment"]').type('Test Note Comment');
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('Test Note Title').should('be.visible');
      cy.contains('Grade: 10').should('be.visible');
      cy.contains('Comment: Test Note Comment').should('be.visible');
    });
  });
  