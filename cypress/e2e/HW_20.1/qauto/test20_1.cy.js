import SignInForm from "../forms/SignInForm";
import GaragePage from "../pages/garagePage";
import HomePage from "../pages/HomePage";
import expensesPage from "../pages/expensesPage";

describe('Add car and add fuel expenses', () => {



  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')

    const email = 'hemyl.qa+1@gmail.com';
    const password = '.3N3LFWawXeaxiw';

    // const email = Cypress.config('env').USERNAME;
    // const password = Cypress.config('env').PASSWORD;
    
    SignInForm.loginUser(email, password);

  });

  it('Add [BMW] [X5]', () => {
    GaragePage.addNewCarToList('BMW', 'X5', '5000');
    GaragePage.verifyLastAddedCar('BMW X5');
  })

  it('Add [Audi] [TT]', () => {
    GaragePage.addNewCarToList('Audi', 'TT', '3000');
    GaragePage.verifyLastAddedCar('Audi TT');
  })

  it('Mileage field is empty', () => {
    GaragePage.mileageFieldIsEmpty('Ford', 'Fusion');
    GaragePage.errorMileageIsEmpty().should('be.visible');
    GaragePage.mileageField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
  })

  it('Mileage is too high', () => {
    GaragePage.mileageIsTooHigh('Porsche', '911');
    GaragePage.errorMileageIsTooHigh().should('be.visible');
    GaragePage.mileageField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
  })

  it('Close modal window Add a car', () => {
    GaragePage.closeAddCar();
    cy.get('.modal-content').should('not.be.visible');
  })

  it('Add expenses', () => {
    GaragePage.fuelExpenses.click();
    expensesPage.addExpensesToCar('BMW X5', '15000', '80', '200');
  })

  it('Mileage field is empty', () => {
    GaragePage.fuelExpenses.click();
    expensesPage.mileageFieldIsEmpty();
    expensesPage.errorMileageIsEmpty().should('be.visible');
    expensesPage.mileage.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    expensesPage.cancelButton().click();
  })

  it('Number of liters is empty', () => {
    GaragePage.fuelExpenses.click();
    expensesPage.numberOfLitersFieldIsEmpty();
    expensesPage.errorNumberOfLitersIsEmpty().should('be.visible');
    expensesPage.numberOfLiters.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    expensesPage.cancelButton().click();
  })

  it('Number of liters min', () => {
    GaragePage.fuelExpenses.click();
    expensesPage.numberOfLitersMin();
    expensesPage.errorLitersMinMax().should('be.visible');
    expensesPage.numberOfLiters.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    expensesPage.cancelButton().click();
  })

  it('Number of liters max', () => {
    GaragePage.fuelExpenses.click();
    expensesPage.numberOfLitersMax();
    expensesPage.errorLitersMinMax().should('be.visible');
    expensesPage.numberOfLiters.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    expensesPage.cancelButton().click();
  })

  it('Total cost is empty', () => {
    GaragePage.fuelExpenses.click();
    expensesPage.totalCostIsEmpty();
    expensesPage.errorTotalCostIsEmpty().should('be.visible');
    expensesPage.totalCost.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    expensesPage.cancelButton().click();
  })

  it('Total cost min', () => {
    GaragePage.fuelExpenses.click();
    expensesPage.totalCostIsMin();
    expensesPage.errorTotalCostMinMax().should('be.visible');
    expensesPage.totalCost.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    expensesPage.cancelButton().click();
  })

  it('Total cost max', () => {
    GaragePage.fuelExpenses.click();
    expensesPage.totalCostIsMax();
    expensesPage.errorTotalCostMinMax().should('be.visible');
    expensesPage.totalCost.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    expensesPage.cancelButton().click();
  })

  it('Invalid date first expense mileage', () => {
    GaragePage.addNewCarToList('Porsche', '911', '30000');
    GaragePage.fuelExpenses.click();
    expensesPage.addExpensesToCar('BMW X5', '15000', '80', '200');
    expensesPage.errorInvalidDateFirstExpenseMileage().should('be.visible');
    expensesPage.cancelButton().click();
  })

  after(() => {
    GaragePage.goToGarageButton.click();
    GaragePage.removeAllCars();
  })

});

