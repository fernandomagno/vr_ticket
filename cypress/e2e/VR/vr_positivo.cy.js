import Base from '../../Common/base'
const base = new Base()

describe('VR Positivo', () => {
    it('Validação de cenario positivo', () => {
      cy.visit('/')

      //Aceitando os termos de uso;    
      cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').should('be.visible');
      cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click();
      
      //Acessando o menu
      cy.get(':nth-child(3) > .vr-quick-navigation__link').should('be.visible');
      cy.get(':nth-child(3) > .vr-quick-navigation__link').click();
      
      //Acessando o mapa
      cy.get('.vr-hero__actions > .vr-button--negative').should('be.visible');
      cy.get('.vr-hero__actions > .vr-button--negative').click();
      
      //Validando os itens na tela
      cy.get('#endereco').should('be.visible');
      cy.get('#endereco').focus().type('Avenida Alvaro Ramos');
      cy.wait(500)
      cy.get('[data-place-id="Ej5BdmVuaWRhIMOBbHZhcm8gUmFtb3MgLSBRdWFydGEgUGFyYWRhLCBTw6NvIFBhdWxvIC0gU1AsIEJyYXNpbCIuKiwKFAoSCbEyjNjHXs6UEbwZUo9YoGt0EhQKEgmvwDIgyF7OlBG2tGi4mIIl4w"]').click();
      cy.get('#buttonFiltrar').click();
      cy.wait(500)
      cy.get(':nth-child(1) > .vr-map__card--title').click();
      cy.wait(500)
      cy.get('#buttonFiltrarCards').click();
      cy.wait(500)
      cy.get('#buscarResultados').click();
      cy.wait(500)
      cy.get('.info-estab__title').should('be.visible');
      cy.get('[data-item="24725081000155"] > .info-estab__title').should("have.text", "O CANTINHO DA MOOCA");
      cy.get('[data-item="45581099000109"] > .info-estab__title').should("have.text", "CESTAS BASICAS GENINHO");     
    })
  })