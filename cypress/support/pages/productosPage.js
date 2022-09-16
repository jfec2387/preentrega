export class ProductosPage{

    constructor(){
        
        this.ShoppingCartButton = "//button[@id ='goShoppingCart']";
    }
    
    
    selecionarProductos(producto){
        cy.get(`[value='${producto}']`).click()
        
    }
    
    clickCloseButton(){
        cy.xpath('//button[@id ="closeModal"]').click()

     }

    clickShoppingCart(){
        cy.xpath(this.ShoppingCartButton).click()
    }

    
}