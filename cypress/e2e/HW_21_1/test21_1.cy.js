import SignInForm from "../HW_20.1/forms/SignInForm";
import GaragePage from "../HW_20.1/pages/garagePage";
import expensesPage from "../HW_20.1/pages/expensesPage";
import './support/commands';


describe('intercept', () => {
    let sid;   
    let carId; 
    const mileage = 1000;
  
    before(() => {
      cy.request('POST', '/api/auth/signin', {
        email: 'hemyl.qa+1@gmail.com',
        password: '.3N3LFWawXeaxiw',
        remember: false
      }).then((response) => {
        const cookie = response.headers['set-cookie'][0];
        sid = cookie.split(';')[0].split('=')[1];
        // cy.log(`sid: ${sid}`);
      });
    });
  
    it('Create car (POST /api/cars)', () => {
      cy.intercept('POST', '**/api/cars').as('createCar');
      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
      GaragePage.addNewCarToList('Fiat', 'Panda', mileage);
      cy.wait('@createCar').then((interception) => {
        expect(interception.response.statusCode).to.eq(201);
        carId = interception.response.body.data.id;
        cy.log(`Car created, ID = ${carId}`);
      });
    });
  
    it('Check car', () => {
      cy.request({
        method: 'GET',
        url: '/api/cars',
        headers: {
          Cookie: `sid=${sid}`,
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        const cars = response.body.data;
        const foundCar = cars.find((c) => c.id === carId);
        expect(foundCar).to.exist;
        cy.log(`Car with ID ${carId} found`);
      });
    });

    it('Add expense (custom command)', () => {
        cy.addExpense(sid, carId, mileage + 500, expensesPage.dateValueAPI, 20, 120)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data.carId).to.eq(carId);
        });
      });

    it('Checking the added expence', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/panel/expenses');
        SignInForm.loginUser('hemyl.qa+1@gmail.com', '.3N3LFWawXeaxiw');
        GaragePage.fuelExpenses.click();
        cy.contains('1500').should('be.visible');
        cy.contains(expensesPage.dateValue).should('be.visible');
        cy.contains('20L').should('be.visible');
        cy.contains('120.00 USD').should('be.visible');

    })

    it('Deleting all cars', () => {
        cy.request({
            method: 'GET',
            url: '/api/cars',
            headers: {
              Cookie: `sid=${sid}`,
            }
        }).then((response) => {
            const allCars =response.body.data;
            allCars.forEach((car) => {
                cy.request({
                    method: 'DELETE',
                    url: `/api/cars/${car.id}`,
                    headers: {
                    Cookie: `sid=${sid}`,
                },
                })
            })
        })
    })

  });

  