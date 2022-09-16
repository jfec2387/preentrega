export class ShoppingCartPage{


    verificarNombre(producto1){

        cy.get(`[name='${producto1}']`).should("have.text", `${producto1}`)


    }
    verificarPrecio(producto1, precio){

    cy.get(`[name='${producto1}']`).siblings("#productPrice").invoke("text").then(texto => {
        assert.equal(texto,`$${precio}`);
    })
    
    }

    clickShowTotalPriceButton(){
        cy.contains('Show total price').click()

    }

    verificarPrecioAcumulado(precio){
        cy.get("#price").invoke('text').should('be.a', 'string').and('equal', `${precio}`)

    }

}





