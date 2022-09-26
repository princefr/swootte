

describe('empty spec', () => {
  before(() => {
    cy.clearCookies()
  })
  
  it('it should create enterprise', () => {
    cy.url({ timeout: 30000 }).should("include", "home")
    cy.visit('http://localhost:3000/')
    cy.wait(3000)
    
    cy.firebaseSignup();

    cy.get('button[id*="connectButton"]').click()

    
    cy.url({ timeout: 5000 }).should("include", "home")


    cy.get('div[id*="create_enterprise_button"]').click()


    cy.url({timeout: 5000}).should("include", "/enterprise/create")
    cy.wait(1000)


    cy.get('div[id*="enterpriseTypeMenuPage"]').should('be.visible')
    cy.get('div[di*="enterpriseTypeButtonValidate"]').click()


    cy.wait(1000)
  })
})