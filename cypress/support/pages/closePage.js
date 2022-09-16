export class ClosePage{

    clickCloseButton(){
        cy.xpath('//button[@id ="closeModal"]').click()

     }

}