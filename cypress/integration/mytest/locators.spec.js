/// <reference types="cypress" />

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })


    it("locating elements with get", () => {
        //Get all elements by tag name
        cy.get("button");

        //Get all elements by className
        cy.get(".btn-with-class")

        //Get all elements with specific classes
        cy.get("[class='Element-btn btn-with-class']")
        cy.get("[class='Element-btn btn-with-class more-btn-classes']")

        //Get all elements by id
        cy.get("btn-with-id")

        //Get all elememts by specific attribute
        cy.get("[type='submit']")

        //Get all elememts by tag name AND class
        cy.get("button.Elements-btn")

         //Get all elememts by tag name AND class AND id
         cy.get("button.Elements-btn#btn-with-id")

         //Get all element by tag name AND class AND type
         cy.get("button.Elements-btn[type='submit']")

         //Get all elements with specific data test id
         cy.get("[data-cy='btn-id-1']")
         cy.getByTestId("btn-id-1")


    })

    it("locating elements with contains", () => {
    //Get element by text
    cy.contains("Unique Text")

    //Get element by text
    cy.contains("Not Unique Text")

    //With Selector
    cy.contains("[type='submit']", "Not Unique Text")
    cy.contains("form", "Not Unique Text")

    cy.get("[type='submit']").contains("Not Unique Text")

    })

    it("locating elements with contains", () => {
        cy.get("#form-1").find(".btn-1")
        cy.get("#form-1").find(".btn-2")

    })

})