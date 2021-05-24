/* eslint-disable no-undef */
describe("Home page actions", () => {
  // For desktop view
  context("720p resolution", () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport(1920, 1080);
    });
    describe("When you visit home", () => {
      it("Should visit home page", () => {
        cy.visit("/");
      });
      describe("link", () => {
        it("Should navigate to Home page", () => {
          cy.get("[data-cy=home-link]")
            .contains("The fellowship of the tretton37")
            .click();
          cy.url().should("include", "/");
        });
      });
    });
    describe("Sort buttons", () => {
      describe("Sort by office/name", () => {
        it("Should sort ninjas by office/name", () => {
          cy.get("[data-cy=sort-office-button]")
            .contains("Sort by name/office")
            .click();
        });
      });
      describe("Sort by name only", () => {
        it("Should sort ninjas by name", () => {
          cy.get("[data-cy=sort-name-button]")
            .contains("Sort by name only")
            .click();
        });
      });
    });
    describe("External link", () => {
      describe("Check for employees Linkedin Profile", () => {
        it("Should chcek for employee's linkedin profile if present", () => {
          cy.get("[data-cy=linkedin-link]")
            .invoke("attr", "href")
            .should(
              "eq",
              "https://www.linkedin.com/pub/agron-kabashi/54/6a8/4a6"
            );
        });
      });
    });
    describe("External link", () => {
      describe("Check for employees github Profile", () => {
        it("Should chcek for employee's github profile if present", () => {
          cy.get("[data-cy=github-link]")
            .invoke("attr", "href")
            .should("eq", "https://www.github.com/AgronKabashi");
        });
      });
    });
    describe("External link", () => {
      describe("Check for employees twitter Profile", () => {
        it("Should chcek for employee's twitter profile if present", () => {
          cy.get("[data-cy=twitter-link]")
            .invoke("attr", "href")
            .should("eq", "https://www.twitter.com/_agronkabashi");
        });
      });
    });
  });
  context("iphone-5 resolution", () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport("iphone-5");
    });
    describe("When you visit home", () => {
      it("Should visit home page", () => {
        cy.visit("/");
      });
      describe("link", () => {
        it("Should navigate to Home page", () => {
          cy.get("[data-cy=home-link]")
            .contains("The fellowship of the tretton37")
            .click();
          cy.url().should("include", "/");
        });
      });
    });
  });
});
