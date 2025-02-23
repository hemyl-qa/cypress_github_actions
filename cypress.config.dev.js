const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space/',
    setupNodeEvents(on, config) {
        // implement node event listeners here
      },
  },
  env: {
    USERNAME: 'hemyl.qa+2@gmail.com',
    PASSWORD: 'Yvg9CQEsukBNL',
  },
  reporter: 'reporters/custom.js',

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },

});
