//<reference types="cypress" />


describe('search elements', () => {
    beforeEach(() => {
    
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
         })
        });

    it('Guest log in', () => {
        cy.get('.header-link.-guest')
    })

    it('Home', () => {
        cy.get('.btn.header-link.-active')
    })

    it('About', () => {
        cy.get('button').contains('About')
    });

    it('Contacts', () => {
        cy.get('button').contains('Contacts')
    });

    it('Sign In', () => {
        cy.get('button').contains('Sign In')
    });

    it('Sign up', () => {
        cy.get('button').contains('Sign up')
    });

    it('Facebook', () => {
        cy.get('.socials_icon.icon.icon-facebook')
    })    

    it('Telegram', () => {
        cy.get('.socials_icon.icon.icon-telegram')
    })

    it('Youtube', () => {
        cy.get('.socials_icon.icon.icon-youtube')
    })

    it('Instagram', () => {
        cy.get('.socials_icon.icon.icon-instagram')
    })

    it('Linkedin', () => {
        cy.get('.socials_icon.icon.icon-linkedin')
    })

    it('Hillel', () => {
        cy.get('.contacts_link.display-4')
    })

    it('Support', () => {
        cy.get('.contacts_link.h4')
    })

    it('Footer Logo', () => {
        cy.get('.footer_logo')
    })
});



