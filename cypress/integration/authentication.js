import { registerPage } from '../support/pageObjects/registerPage'
// import { mainPage } from '../support/pageObjects/mainPage'

describe('My Store - Automation Practice', () => {
	context('Authentications', () => {
		beforeEach(() => {
			cy.visit('/')
            	// mainPage.verifyMainPage()
            	cy.get('.login').click()
		})

		it('Register with Valid Credentials', () => {
            	// registerPage.verifyRegisterPage()
            	registerPage.registerWithValidCredentials()
            	registerPage.verifyRegisterWithValidCredentials()
		})
	})
})