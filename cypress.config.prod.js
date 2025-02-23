const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
    setupNodeEvents(on, config) {
        // implement node event listeners here
      },
  },
  env: {
    USERNAME: 'hemyl.qa+1@gmail.com',
    PASSWORD: '.3N3LFWawXeaxiw',
  },
  reporter: 'support/reporters/custom.js',

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },


});

