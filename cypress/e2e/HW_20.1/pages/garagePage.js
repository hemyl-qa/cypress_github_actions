class GaragePage {

    get goToGarageButton() {
        return cy.contains('Garage');
    }

    get addCarButton() {
        return cy.get('.panel-page_heading button');
    }

    get brandDropdown() {
        return cy.get('#addCarBrand');
    }

    get modelDropdown() {
        return cy.get('#addCarModel');
    }

    get mileageField() {
        return cy.get('#addCarMileage');
    }

    get submitAddCarButton() {
        return cy.get('app-add-car-modal .btn-primary');
    }

    get addedCars() {
        return cy.get('.car-list li');
    }

    get carNamesSelector() {
        return '.car_name';
    }

    get fuelExpenses() {
        return cy.contains('Fuel expenses');
    }

    errorMileageIsEmpty() {
        return cy.get('.invalid-feedback').contains('Mileage cost required');
    }

    errorMileageIsTooHigh() {
        return cy.get('.invalid-feedback').contains('Mileage has to be from 0 to 999999');
    }

    get closeAddCarButton() {
        return cy.get('.btn-secondary').contains('Cancel');
    }

    openPage() {
        cy.visit('/panel/garage');
    }


    addNewCarToList(brand, model, mileage) {
        this.addCarButton.click();
        this.brandDropdown.select(brand);
        this.modelDropdown.select(model);
        this.mileageField.type(mileage);
        this.submitAddCarButton.click();
    }


    verifyLastAddedCar(carName) {
        this.addedCars.eq(0).find(this.carNamesSelector).should('have.text', carName);
    }

    mileageFieldIsEmpty(brand, model) {
        this.addCarButton.click();
        this.brandDropdown.select(brand);
        this.modelDropdown.select(model);
        this.mileageField.focus();
        this.mileageField.blur();
    }


    mileageIsTooHigh(brand, model) {
        this.addCarButton.click();
        this.brandDropdown.select(brand);
        this.modelDropdown.select(model);
        this.mileageField.type('9999999');
        this.mileageField.blur();
    }

    closeAddCar() {
        this.addCarButton.click();
        this.closeAddCarButton.click();
    }

    removeAllCars() {
        this.addedCars.each((car) => {
            cy.wrap(car).find('.icon-edit').click();
            cy.contains('Remove car').click();
            cy.get('.btn-danger').click();
        })
    }
}

export default new GaragePage();