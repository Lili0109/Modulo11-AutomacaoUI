/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade endereços - Faturamento e entrega', () => {


    beforeEach(() => {

        cy.visit ('minha-conta/')
        cy.fixture ('perfil').then (dados =>{
             cy.login (dados.usuario, dados.senha)
        
        })

    });
     
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
        EnderecoPage.editarEnderecoFaturamento ('Lili', 'Jorge', 'EBAC' , 'Brasil', 'Rua 4', '32', 'Brasólia' , 'Distrito Federal', '72005-332', '35687458', 'lili@gmail.com')
        cy.get('.woocommerce-message'). should ('contain' , 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        
        EnderecoPage.editarEnderecoFaturamento (
            dadosEndereco [1].nome,
            dadosEndereco [1].sobrenome,
            dadosEndereco [1].empresa,
            dadosEndereco [1].pais,
            dadosEndereco [1].endereco,
            dadosEndereco [1].numero,
            dadosEndereco [1].cidade,
            dadosEndereco [1].estado,
            dadosEndereco [1].cep,
            dadosEndereco [1].telefone,
            dadosEndereco [1].email 
            )
        cy.get('.woocommerce-message'). should ('contain' , 'Endereço alterado com sucesso.')
    });
});

