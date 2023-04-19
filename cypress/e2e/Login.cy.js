/// <reference types="cypress" />

const perfil = require ('../fixtures/perfil.json')

context('Funcionalidade de Login', () => {

    beforeEach(() => {
        cy.visit ('minha-conta/')
        
    });

    afterEach(() => {
        cy.screenshot ()
    });
    
    it('Deverá fazer login com sucesso', () => {
        
        cy.get ('#username').type ('aluno_ebac@teste.com')
        cy.get ('#password').type ('teste@teste.com')
        cy.get ('.woocommerce-form > .button').click ()

        cy.get ('.page-title').should ('contain' , "Minha conta")
        cy.get ('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , "Olá")

    });

    it('Deverá fazer login com sucesso - usando arquivo de dados', () => {
        
        cy.get ('#username').type (perfil.usuario)
        cy.get ('#password').type (perfil.senha)
        cy.get ('.woocommerce-form > .button').click ()

        cy.get ('.page-title').should ('contain' , "Minha conta")

    });

    
    it.only('Deverá fazer login com sucesso - usando fixture', () => {
      
        cy.fixture ('perfil'). then (dados => {
        
            cy.get ('#username').type (dados.usuario)
            cy.get ('#password').type (dados.senha, {log:false})
            cy.get ('.woocommerce-form > .button').click ()
    
            cy.get ('.page-title').should ('contain' , "Minha conta")

        })

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