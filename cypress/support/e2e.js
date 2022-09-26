// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { attachCustomCommands } from 'cypress-firebase';
require('./commands')

// Alternatively you can use CommonJS syntax:
// require('./commands')

const fbConfig = {
    apiKey: Cypress.config().NEXT_PUBLIC_firebase_apiKey, 
    authDomain: Cypress.config().NEXT_PUBLIC_firebase_authDomain,
    databaseURL: Cypress.config().NEXT_PUBLIC_firebase_databaseURL,
    projectId: Cypress.config().NEXT_PUBLIC_firebase_projectId,
};
  
firebase.initializeApp(fbConfig);
attachCustomCommands({ Cypress, cy, firebase });