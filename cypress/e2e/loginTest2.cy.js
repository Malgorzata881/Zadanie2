describe("User can visit GoIt page", () => {

    beforeEach("Go to page", () => {
        cy.visit("https://www.edu.goit.global/account/login")
    });

    it("First log in and klog out", () => {
        cy.get('#user_email').type("m.michalczuk7@o2.pl");
        cy.get('#user_password').type("123456789");
        cy.get('.eckniwg2').click();

        cy.get("#open-navigation-menu-mobile").click();
        cy.get(":nth-child(8) > .next-bve2vl").click();
    });
    
});