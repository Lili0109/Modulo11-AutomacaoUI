/// <reference types="cypress" />

context('Funcionalidade de Login', () => {
    
    it('Deverá fazer login com sucesso', () => {
        
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deverá exibir mensagem de erro ao inserir login ou senha inválidos', () => {
        
    });
});