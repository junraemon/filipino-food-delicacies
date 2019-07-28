import { getGreeting } from '../support/app.po';

describe('filipino-food-delicacies', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to filipino-food-delicacies!');
  });
});
