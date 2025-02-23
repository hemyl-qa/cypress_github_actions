class ExpensesPage {
    
    get addAnExpense() {
        return cy.get('.btn-primary').contains('Add an expense');
    }

    get carSelectorDropdown() {
        return cy.get('#carSelectDropdown');
    }

    get vehicleDropDown() {
        return cy.get('#addExpenseCar');
    }

    get reportDate() {
        return cy.get('#addExpenseDate');
    }

    get dateValue() {
        const today = new Date();
        today.setDate(today.getDate());
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${day}.${month}.${year}`;
    }

    get dateValueAPI() {
            const today = new Date();
            const y = today.getFullYear();
            const m = String(today.getMonth() + 1).padStart(2, '0');
            const d = String(today.getDate()).padStart(2, '0');
            return `${y}-${m}-${d}`;
          
    }

    get mileage() {
        return cy.get('#addExpenseMileage');
    }

    get numberOfLiters() {
        return cy.get('#addExpenseLiters');
    }

    get totalCost() {
        return cy.get('#addExpenseTotalCost');
    }

    get addButton() {
        return cy.get('.modal-footer .btn-primary');
    }

    cancelButton() {
        return cy.get('.btn-secondary').contains('Cancel');
    }

    errorMileageIsEmpty() {
        return cy.get('.invalid-feedback').contains('Mileage required');
    }

    errorNumberOfLitersIsEmpty() {
        return cy.get('.invalid-feedback').contains('Liters required');
    }

    errorTotalCostIsEmpty() {
        return cy.get('.invalid-feedback').contains('Total cost required');
    }

    errorLitersMinMax() {
        return cy.get('.invalid-feedback').contains('Liters has to be from 0.01 to 9999');
    }

    errorTotalCostMinMax() {
        return cy.get ('.invalid-feedback').contains('Total cost has to be from 0.01 to 1000000');
    }

    errorInvalidDateFirstExpenseMileage() {
        return cy.get('.alert-danger').contains("New mileage must not be equal to any today's expense values")
    }


    addExpensesToCar(vehicle, miles, liters, cost) {
        this.addAnExpense.click();
        this.vehicleDropDown.select(vehicle);
        this.reportDate.clear().type(this.dateValue);
        this.mileage.clear().type(miles);
        this.numberOfLiters.type(liters);
        this.totalCost.type(cost);
        this.addButton.click();
    }

    mileageFieldIsEmpty() {
        this.addAnExpense.click();
        this.mileage.clear().focus();
        this.mileage.blur();
    }

    numberOfLitersFieldIsEmpty() {
        this.addAnExpense.click();
        this.numberOfLiters.focus();
        this.numberOfLiters.blur();
    }

    numberOfLitersMin() {
        this.addAnExpense.click();
        this.numberOfLiters.type('0');
        this.numberOfLiters.blur();
    }

    numberOfLitersMax() {
        this.addAnExpense.click();
        this.numberOfLiters.type('10000');
        this.numberOfLiters.blur();
    }

    totalCostIsEmpty() {
        this.addAnExpense.click();
        this.totalCost.focus();
        this.totalCost.blur();
    }

    totalCostIsMin() {
        this.addAnExpense.click();
        this.totalCost.type('0');
        this.totalCost.blur();
    }

    totalCostIsMax() {
        this.addAnExpense.click();
        this.totalCost.type('9999999');
        this.totalCost.blur();
    }

    

}

export default new ExpensesPage();
