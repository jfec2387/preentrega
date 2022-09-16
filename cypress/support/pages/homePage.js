export class HomePage{

    constructor(){
        this.onlineshoplink ="#onlineshoplink";
        
    }

    clickOnlineShopLink(){
        cy.get(this.onlineshoplink).click()
    }

}