Cypress.Commands.add('addExpense', (sid, carId, mileage, reportedAt, liters, totalCost) => {
    return cy.request({
      method: 'POST',
      url: '/api/expenses',
      headers: {
        Cookie: `sid=${sid}`,
      },
      body: {
        carId,
        reportedAt,
        mileage,
        liters,
        totalCost,
        forceMileage: false
      }
    });
  });
  

