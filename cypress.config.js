const { defineConfig } = require('cypress');
const cypressFirebasePlugin = require('cypress-firebase').plugin;
const admin = require('firebase-admin');
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
        config.NEXT_PUBLIC_firebase_apiKey = process.env.NEXT_PUBLIC_firebase_apiKey
        config.NEXT_PUBLIC_firebase_authDomain = process.env.NEXT_PUBLIC_firebase_apiKey
        config.NEXT_PUBLIC_firebase_databaseURL = process.env.NEXT_PUBLIC_firebase_apiKey
        config.NEXT_PUBLIC_firebase_projectId = process.env.NEXT_PUBLIC_firebase_apiKey
        
      cypressFirebasePlugin(on, config, admin);
      // e2e testing node events setup code
    },
  },
});