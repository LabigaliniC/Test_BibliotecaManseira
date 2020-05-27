import env from '../../support/enviroments'
import user from '../../support/users'
import listaAmigos from '../../support/listaAmigos'
import createAmigo_locator from '../../support/createAmigo_locators'

describe('Teste de Criação de Amigo', () => {
    beforeEach(function() {
        cy.login(env.URL, user.ADMIN.USER, user.ADMIN.PASSWORD)
    })

    it('Criar Amigo', () => {
        cy.visit(env.URL + listaAmigos.URL)
        cy.get(createAmigo_locator.CREATE_AMIGO).click()
        cy.get(createAmigo_locator.NAME).type('Ana')
        cy.get(createAmigo_locator.EMAIL).type('ana@yahoo.com.br')
        cy.get(createAmigo_locator.PHONE).type('4799987811')
        cy.get(createAmigo_locator.BTN_CREATE).click()
    })

})