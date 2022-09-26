// eslint-disable-next-line import/no-unresolved
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import {auth} from "firebase-admin"

const getRandomInt = () => {
    const len = 9;
    return parseInt((Math.random() * 9 + 1) * Math.pow(10, len - 1), 10);
}

Cypress.Commands.add('firebaseSignup', async () => {
    const _auth = await auth().createUser({
        phoneNumber: "+1" + getRandomInt()
    }).catch((onRjected) => {
        cy.log(onRjected)
    })

    cy.log(_auth)

    cy.visit('/')
})