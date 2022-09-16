export class RegistroPage{

    constructor(){
        this.iniciarSesioButton = "#registertoggle"
    }

    clickIniciarSesioButton(){
    cy.get(this.iniciarSesioButton).dblclick()

     }

}