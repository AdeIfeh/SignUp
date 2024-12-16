const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://example.cypress.io', // Default base URL for tests
    chromeWebSecurity: false, // Disable security to allow cross-origin testing
    viewportWidth: 1280, // Set default viewport width
    viewportHeight: 720, // Set default viewport height
    retries: {
      runMode: 2, // Number of retries for a failed test in run mode
      openMode: 1, // Number of retries for a failed test in interactive mode
    },
    defaultCommandTimeout: 60000, // Increase default timeout for commands (in ms)
    video: false, // Disable video recording
  },
});
