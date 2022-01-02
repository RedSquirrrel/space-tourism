/// <reference types="cypress" />

describe('Home Page', function () {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Home page can be opened', function () {
    cy.contains('So, you want to travel to');
    cy.contains('Space');
  });

  it('Expore button can be clicked', function () {
    cy.get('.home__large-button-container__large-button').click();
    cy.contains('Pick Your Destination');
    cy.contains('Moon');
  });

  it('Logo button can be clicked and return to home page', function () {
    cy.get('.header__content__logo').click();
    cy.contains('So, you want to travel to');
    cy.contains('Space');
  });
});

describe('Destination Page', function () {
  beforeEach(() => {
    cy.visit('/destination');
  });

  it('Destination page can be opened', function () {
    cy.contains('Pick Your Destination');
  });

  it('Mars button can be clicked', function () {
    cy.get('.dest-btn').then((buttons) => {
      cy.wrap(buttons[1]).click();
    });

    cy.contains(
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
    );
    cy.get('.destination__picture__img').should('have.attr', 'src', '/destination/image-mars.png');
  });
});

describe('Crew Page', function () {
  beforeEach(() => {
    cy.visit('/crew');
  });

  it('Crew page can be opened', function () {
    cy.contains('Commander');
    cy.contains('Douglas Hurley');
  });

  it('Dot button can be clicked', function () {
    cy.get('.transparent').then((buttons) => {
      cy.wrap(buttons[3]).click();
    });

    cy.contains('Flight Engineer');
    cy.contains('Anousheh Ansari');
    cy.get('.crew__picture__img').should('have.attr', 'src', '/crew/image-anousheh-ansari.png');
  });
});

describe('Technology Page', function () {
  beforeEach(() => {
    cy.visit('/technology');
  });

  it('Technology page can be opened', function () {
    cy.contains('Launch vehicle');
    cy.get('.technology__picture__img').should('have.attr', 'alt', 'Launch vehicle');
  });

  it('Button 2 can be clicked', function () {
    cy.get('.transparent').then((buttons) => {
      cy.wrap(buttons[1]).click();
    });

    cy.contains('Spaceport');
    cy.get('.technology__picture__img').should('have.attr', 'alt', 'Spaceport');
  });
});

describe('Back to Home page', function () {
  it('Logo button can be clicked and return to home page', function () {
    cy.get('.header__content__logo').click();
    cy.contains('So, you want to travel to');
    cy.contains('Space');
    cy.url().should('be.eq', 'http://localhost:3000/');
  });
});
