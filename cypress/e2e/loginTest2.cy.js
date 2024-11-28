import loginPage from "../e2e/pages/LoginPage";

describe("User can visit GoIt page", () => {

    beforeEach("Go to page", () => {
        loginPage.visit();
    });

    it("First log in and log out", () => {
        loginPage.loginUser("m.michalczuk7@o2.pl", "123456789")
        loginPage.logout()
    });

    it("Second log in and log out", () => {
        loginPage.loginUser("m.michalczuk7@o2.pl, 123456789")
        loginPage.logout()
    });

});