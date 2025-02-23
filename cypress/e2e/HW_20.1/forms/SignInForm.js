
class SignInForm {
    
    selectorsLogin = {
      
      signInButton: '.btn.btn-outline-white',
      emailField: '#signinEmail',
      passwordField: '#signinPassword',
      loginButton: '.modal-content .btn-primary',
    };

    buttonSignIn() {
        return cy.get(this.selectorsLogin.signInButton).click()
    }
    
    inputEmail(email) {
        return cy.get(this.selectorsLogin.emailField).type(email)
    }
  
    inputPassword(password) {
        return cy.get(this.selectorsLogin.passwordField).type(password, { sensitive: true })
    }
    
    clickLoginButton() {
        return cy.get(this.selectorsLogin.loginButton).click();
    }

    loginUser (email, password) {
        this.buttonSignIn();
        this.inputEmail(email);
        this.inputPassword(password);
        this.clickLoginButton();
      };

  }
  
  export default new SignInForm();