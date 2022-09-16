export class ProductosPage{

    constructor(){
        this.producto1Input ="[class='chakra-text css-2a2tjc']";
        this.producto2Input ="[class='chakra-text css-2a2tjc']";
        this.addtocar1 = "//button[@id ='blackJacket']";
        this.addtocar2 = "//button[@id ='beigepants']";
        this.ShoppingCartButton = "//button[@id ='goShoppingCart']";
    }
    
    
    selecionarProducto1(){
        cy.get(this.producto1Input).contains("Black Jacket").click()
        
    }
    
    clickAddtocar1(){
        cy.xpath(this.addtocar1).click()
    }

    selecionarProducto2(){
        cy.get(this.producto2Input).contains("Beige Shorts").click()
        
    }
    
    clickAddtocar2(){
        cy.xpath(this.addtocar2).click()
    }

    clickShoppingCart(){
        cy.xpath(this.ShoppingCartButton).click()
    }
}