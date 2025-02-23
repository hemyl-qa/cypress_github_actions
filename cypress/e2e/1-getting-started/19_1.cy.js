describe('search elements', () => {
    beforeEach(() => {
      cy.visit('/', {
        auth: {
          username: 'guest',
          password: 'welcome2qauto',
        },
      });
      
      cy.get('button').contains('Sign up').as('SignUpButton');
      cy.get('@SignUpButton').click();

    });
  
    it('Sign Up button', () => {
      cy.get('@SignUpButton').should('be.visible');
     });

    const email = `hemyl.qa+${Date.now()}@gmail.com`;
    const password = 'Qwerty12345';
  
    it('Registration', () => {
      cy.get('#signupName').type('Yaroslav')
        .get('#signupLastName').type('Bielkin')
        .get('#signupEmail').type(email)
        .get('#signupPassword').type(password, { sensitive: true })
        .get('#signupRepeatPassword').type(password, { sensitive: true })
      cy.contains('Register').click()
      cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage')
      cy.contains('Registration complete').should('be.visible');
    });

    it('Close registration form', () => {
      cy.contains('×').click()
      cy.get('.modal-title').should('not.be.visible');
    });

    it('Empty Name field', () => {
      cy.get('#signupName').focus().blur()
      cy.contains('Name required').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    // Символи ' і - є невалідними для даного поля, хоча повинні бути валідними для полів Name і Last Name
    // it('Checking valid characters in a name', () => {             
    //   cy.get('#signupName').type("O\'Conor-junior")
    //   cy.get('#signupName').blur()
    //   cy.should('not.have.class', 'invalid');
    // });

    it('Name length validation (min)', () => {
      cy.get('#signupName').type('q').blur()
      cy.contains('Name has to be from 2 to 20 characters long').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Name length validation (max)', () => {
      cy.get('#signupName').type('qwertyuiopasdfghjklzx').blur()
      cy.contains('Name has to be from 2 to 20 characters long').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Name validation', () => {
      cy.get('#signupName').type('@#$').blur()
      cy.contains('Name is invalid').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    }); 

    // Символи ' і - є невалідними для даного поля, хоча повинні бути валідними для полів Name і Last Name
    // it('Checking valid characters in a name', () => {             
    //   cy.get('#signupLastName').type("O\'Conor-junior")
    //     .get('#signupLastName').blur()
    //     .should('not.have.class', 'invalid');
    // });

    it('Empty Last name field', () => {
      cy.get('#signupLastName').focus().blur()
      cy.contains('Last name required').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Last name length validation (min)', () => {
      cy.get('#signupLastName').type('q').blur()
      cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Last name length validation (max)', () => {
      cy.get('#signupLastName').type('qwertyuiopasdfghjklzx').blur()
      cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Last name validation', () => {
      cy.get('#signupLastName').type('@#$').blur()
      cy.contains('Last name is invalid').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    }); 

    it('Empty Email field', () => {
      cy.get('#signupEmail').focus().blur()
      cy.contains('Email required').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Email without @', () => {
      cy.get('#signupEmail').type('qwgmail.com').blur()
      cy.contains('Email is incorrect').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });  

    it('Email with two @', () => {
      cy.get('#signupEmail').type('qw@@gmail.com').blur()
      cy.contains('Email is incorrect').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });  

    it('Email without . in the domain name', () => {
      cy.get('#signupEmail').type('qw@gmailcom').blur()
      cy.contains('Email is incorrect').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Email without a domain name', () => {
      cy.get('#signupEmail').type('qw@gmail.').blur()
      cy.contains('Email is incorrect').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });  

    it('Empty Password field', () => {
      cy.get('#signupPassword').focus().blur()
      cy.contains('Password required').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });  

    it('Password length validation (min)', () => {
      cy.get('#signupPassword').type('Qw1', { sensitive: true }).blur()
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Password length validation (max)', () => {
      cy.get('#signupPassword').type('Qwertyuiopasdfg1', { sensitive: true }).blur()
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Password without number', () => {
      cy.get('#signupPassword').type('Qwertyuiopasd', { sensitive: true }).blur()
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Password without letter', () => {
      cy.get('#signupPassword').type('123456789', { sensitive: true }).blur()
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Password without a lowercase letter', () => {
      cy.get('#signupPassword').type('QWERTYUI1', { sensitive: true }).blur()
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Password without a capital letter', () => {
      cy.get('#signupPassword').type('qwertyui1', { sensitive: true }).blur()
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Empty Re-enter password field', () => {
      cy.get('#signupRepeatPassword').focus().blur()
      cy.contains('Re-enter password required').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });  

    it('Re-enter password length validation (min)', () => {
      cy.get('#signupRepeatPassword').type('Qw1', { sensitive: true }).blur()
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Re-enter password length validation (max)', () => {
      cy.get('#signupRepeatPassword').type('Qwertyuiopasdfg1', { sensitive: true }).blur()
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Re-enter password without number', () => {
      cy.get('#signupRepeatPassword').type('Qwertyuiopasd', { sensitive: true }).blur()
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Re-enter password without letter', () => {
      cy.get('#signupRepeatPassword').type('123456789', { sensitive: true }).blur()
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Re-enter password without a lowercase letter', () => {
      cy.get('#signupRepeatPassword').type('QWERTYUI1', { sensitive: true }).blur()
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });

    it('Re-enter password without a capital letter', () => {
      cy.get('#signupRepeatPassword').type('qwertyui1', { sensitive: true }).blur()
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.contains('Register').should('be.disabled')
    });
    
    it('Check for password consistency', () => {
      cy.get('#signupPassword').type('qwertyui1', { sensitive: true }).blur()
      cy.get('#signupRepeatPassword').type('Qwertyui1').blur()
      cy.contains('Passwords do not match').should('be.visible')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)')
      cy.contains('Register').should('be.disabled')
    });

    it('Login with existing account', () => {
      cy.login(email, password);
    });

    it.only('test selectors', () => {
      cy.get(selectorsLogin.emailField).type(email);
      cy.get(selectorsLogin.passwordField).type(password, { sensitive: true });

      cy.get(selectorsLogin.loginButton).click();
  
      cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');

    })
})


