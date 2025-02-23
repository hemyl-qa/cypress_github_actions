it('custom comands', () => {
    cy.visit('https://qauto.forstudy.space');
    const randomEmail = `hemyl.qa+${Date.now()}@gmail.com`;
    cy.login(randomEmail, '.mbsVb5kV96FnTU');
})






