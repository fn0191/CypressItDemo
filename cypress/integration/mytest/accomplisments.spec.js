/// <reference types="cypress" />

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/accomplishment")
    })

    it("should showcase error if information is missing", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I made 10 threes in a row")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("This Accomplishment was Successfully Submitted").should("be.visible")
       
    })

    it("should return back to accomplishment dashboard with empty inputs when 'Go Back' button", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I made 10 threes in a row")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("Go Back").click()
        cy.contains("h2", "Accomplishment").should("be.visible")
        cy.get("[data-cy='accomplishment-title-input']").should("not.have.value")
        cy.get("[data-cy='accomplishment-input']").should("have.value", "")
        cy.get("[type='checkbox']").should("be.checked")
        
       
    })


})

