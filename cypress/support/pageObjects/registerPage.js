import Chance from 'chance'
const chance = new Chance()

const emailValidValue = chance.email({ domain: 'mailinator.com' })
const gender = chance.pickone(['#id_gender1', '#id_gender2'])
const password = chance.string()
const dayOfBirth = chance.integer({ min: 1, max: 31 }).toString()
const monthOfBirth = chance.month()
const yearOfBirth = chance.year({ min: 1900, max: 1999 })
const company = chance.company()
const address = chance.address({ short_suffix: true })
const city = chance.city()
const state = chance.state({ country: 'us', full: true })
const postcode = chance.zip()
const phone = chance.phone({ formatted: true })

export const registerPage = {
	verifyRegisterPage() {
		cy.get('.page-subheading')
			.eq(0)
			.contains('Create an account')
	},
	
	registerWithValidCredentials() {
		cy.get('#email_create')
			.type(emailValidValue)
		cy.get('#SubmitCreate')
			.click()
		cy.request({
			method: 'POST',
			url: '/index.php'
		}).then((resp) => {
			expect(resp.status).to.eq(200)
			})
		// cy.get('.page-heading')
		// 	.eq(0)
		// 	.contains('Create an account')
		cy.get(gender)
			.click()
		if (gender == '#id_gender1') {
			cy.get('#customer_firstname')
				.type(chance.first({gender: 'male'}))
			cy.get('#customer_lastname')
				.type(chance.last({gender: 'male'}))
		} else {
			cy.get('#customer_firstname')
				.type(chance.first({gender: 'female'}))
			cy.get('#customer_lastname')
				.type(chance.last({gender: 'female'}))
		}
		cy.get('#passwd')
			.type(password)
		cy.get('#days')
			.select(dayOfBirth)
		cy.get('#months')
			.select(monthOfBirth)
		cy.get('#years')
			.select(yearOfBirth)
		cy.get('#company')
			.type(company)
		cy.get('#address1')
			.type(address)
		cy.get('#city')
			.type(city)
		cy.get('#id_state')
			.select(state)
		cy.get('#postcode')
			.type(postcode)
		cy.get('#phone_mobile')
			.type(phone)
		cy.get('#submitAccount')
			.click()
	},

	verifyRegisterWithValidCredentials() {
		cy.get('.page-heading')
			.contains('My account')
	}
}