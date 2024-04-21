describe('Calculator Functionality', () => {
  context('Addition', () => {
    it('adds two positive numbers correctly', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('5');
      cy.get('select').select('+').should('have.value', '+');
      cy.get('input').last().type('3');
      cy.get('button').click();
      cy.get('p').should('have.text', '8');
    });

    it('adds two negative numbers correctly', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('-5');
      cy.get('select').select('+').should('have.value', '+');
      cy.get('input').last().type('-3');
      cy.get('button').click();
      cy.get('p').should('have.text', '-8');
    });

    it('adds one positive number and one negative number correctly', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('5');
      cy.get('select').select('+').should('have.value', '+');
      cy.get('input').last().type('-3');
      cy.get('button').click();
      cy.get('p').should('have.text', '2');
    });

    it('adds two positive numbers correctly', () => {
      cy.visit('http://localhost:4200/');
      cy.performCalculation('5', '+', '3');
      cy.get('p').should('have.text', '8');
    });
  });

  context('Subtraction', () => {
    it('subtracts two positive numbers correctly', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('5');
      cy.get('select').select('-').should('have.value', '-');
      cy.get('input').last().type('3');
      cy.get('button').click();
      cy.get('p').should('have.text', '2');
    });

    it('subtracts two negative numbers correctly', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('-5');
      cy.get('select').select('-').should('have.value', '-');
      cy.get('input').last().type('-3');
      cy.get('button').click();
      cy.get('p').should('have.text', '-2');
    });

    it('subtracts one positive number and one negative number correctly', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('5');
      cy.get('select').select('-').should('have.value', '-');
      cy.get('input').last().type('-3');
      cy.get('button').click();
      cy.get('p').should('have.text', '8');
    });
  });

  context('Multiplication', () => {
    it('multiplies non-zero number and zero correctly', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('5');
      cy.get('select').select('*').should('have.value', '*');
      cy.get('input').last().type('0');
      cy.get('button').click();
      cy.get('p').should('have.text', '0');
    });

    it('multiplies two positive numbers correctly', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('5');
      cy.get('select').select('*').should('have.value', '*');
      cy.get('input').last().type('3');
      cy.get('button').click();
      cy.get('p').should('have.text', '15');
    });

    it('multiplies two negative numbers correctly', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('-5');
      cy.get('select').select('*').should('have.value', '*');
      cy.get('input').last().type('-3');
      cy.get('button').click();
      cy.get('p').should('have.text', '15');
    });

    it('multiplies one positive number and one negative number correctly', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('-5');
      cy.get('select').select('*').should('have.value', '*');
      cy.get('input').last().type('3');
      cy.get('button').click();
      cy.get('p').should('have.text', '-15');
    });
  });

  context('Division', () => {
    it('divides a positive non-zero number by another positive non-zero number', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('5');
      cy.get('select').select('/').should('have.value', '/');
      cy.get('input').last().type('2');
      cy.get('button').click();
      cy.get('p').should('have.text', '2.5');
    });

    it('divides a negative non-zero number by another positive non-zero number', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('-5');
      cy.get('select').select('/').should('have.value', '/');
      cy.get('input').last().type('2');
      cy.get('button').click();
      cy.get('p').should('have.text', '-2.5');
    });

    it('divides a negative non-zero number by another negative non-zero number', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('-5');
      cy.get('select').select('/').should('have.value', '/');
      cy.get('input').last().type('-2');
      cy.get('button').click();
      cy.get('p').should('have.text', '2.5');
    });

    it('divides a positive non-zero number by another negative non-zero number', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('5');
      cy.get('select').select('/').should('have.value', '/');
      cy.get('input').last().type('-2');
      cy.get('button').click();
      cy.get('p').should('have.text', '-2.5');
    });

    it('divides a positive non-zero number by zero', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('5');
      cy.get('select').select('/').should('have.value', '/');
      cy.get('input').last().type('0');
      cy.get('button').click();
      cy.get('p').should('have.text', 'Infinity');
    });

    it('divides a negative non-zero number by zero', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('-5');
      cy.get('select').select('/').should('have.value', '/');
      cy.get('input').last().type('0');
      cy.get('button').click();
      cy.get('p').should('have.text', '-Infinity');
    });

    it('divide zero by zero', () => {
      cy.visit('http://localhost:4200/');
      cy.get('input').first().type('0');
      cy.get('select').select('/').should('have.value', '/');
      cy.get('input').last().type('0');
      cy.get('button').click();
      cy.get('p').should('have.text', 'NaN');
    });
  });
});

it('adds two positive numbers correctly', () => {
  cy.performCalculation('5', '+', '3');
  cy.get('p').should('have.text', '8');
});
