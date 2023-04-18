/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

describe('Funcionalidade de Pré Cadastro', () => {
    

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Deve completar o pré cadastro com sucesso', () => {

        let nomefaker = faker.name.lastName ()
        let sobrenomefaker = faker.name.firstName ()
        let emailfaker = faker.internet.email ()


        cy.get ('#reg_email'). type (emailfaker)
        cy.get ('#reg_password'). type ('Teste@teste')
        cy.get (':nth-child(4) > .button').click ()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a'). click ()
        cy.get('#account_first_name'). type (sobrenomefaker)
        cy.get('#account_last_name'). type (nomefaker)
        cy.get('.woocommerce-Button'). click ()

        cy.get ('.woocommerce-message').should ('contain' , 'Detalhes da conta modificados com sucesso')
    });
});