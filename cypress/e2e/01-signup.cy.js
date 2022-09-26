
describe('empty spec', () => {
  before(() => {
    cy.clearCookies()
  })

  it('it login and be redirected into the signing page', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(3000)
    
    cy.firebaseSignup();

    
    cy.get('button[id*="connectButton"]').click()


    cy.url({ timeout: 5000 }).should("include", "signup")



    cy.get('input[id*="first-name"]').type("")
    cy.wait(1000)
    cy.get('input[id*="last-name"]').type("")
    cy.wait(1000)
    cy.get('input[id*="email-address"]').type("")
    cy.wait(1000)
    cy.get('input[id*="password"]').type("")
    cy.wait(1000)
    cy.get('input[id*="new_password"]').type("")
    cy.wait(1000)

    cy.get('input[id*="street-address"]').scrollIntoView().should('be.visible').type("")
    cy.wait(1000)
    cy.get('input[id*="city"]').scrollIntoView().should('be.visible').type("")
    cy.wait(1000)
    cy.get('input[id*="state"]').scrollIntoView().should('be.visible').type("")
    cy.wait(1000)
    cy.get('input[id*="postal-code"]').scrollIntoView().should('be.visible').type("")
    cy.wait(1000)
    cy.get('input[id*="pincode"]').scrollIntoView().should('be.visible').type("")
    cy.wait(1000)

    cy.get('button[id=*"button_register"]').click()

    cy.url({ timeout: 5000 }).should("include", "home")


  })



  after(async() => {
    cy.logout()
  })
})