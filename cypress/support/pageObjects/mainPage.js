export const mainPage = {
	verifyMainPage() {
        cy.get('.shop-phone')
            .contains('Call us now:')
	}
}