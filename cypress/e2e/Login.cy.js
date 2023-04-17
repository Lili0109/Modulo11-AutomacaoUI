/// <reference types="cypress" />

context('Funcionalidade de Login', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });
    
    it('Deverá fazer login com sucesso', () => {
        
        cy.get ('#username').type ('aluno_ebac@teste.com')
        cy.get ('#password').type ('teste@teste.com')
        cy.get ('.woocommerce-form > .button').click ()

        cy.get ('.page-title').should ('contain' , "Minha conta")
        cy.get ('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , "Olá")

    });


    it('Deverá exibir mensagem de erro ao inserir login inválidos', () => {
        
        cy.get ('#username').type ('lulu@teste.com')
        cy.get ('#password').type ('teste@teste.com')
        cy.get ('.woocommerce-form > .button').click ()

        cy.get ('.woocommerce-error').should ('contain' , "Endereço de e-mail desconhecido")

    });


    it('Deverá exibir mensagem de erro ao inserir senha inválida', () => {
        
        cy.get ('#username').type ('aluno_ebac@teste.com')
        cy.get ('#password').type ('teste@com')
        cy.get ('.woocommerce-form > .button').click ()

        cy.get ('.woocommerce-error').should ('contain' , 'Perdeu a senha')

});

});