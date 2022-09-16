export class LoginPage{

    constructor(){
        this.usernameInput ="#user";
        this.passwordInput ="#pass";
        this.lButton ="#submitForm"
    }


    escribirUsuario(username){
        cy.get(this.usernameInput).type(username)

    }
    escribirContraseña(password){
        cy.get(this.passwordInput).type(password)

    }

    clickLoginButton(){
        cy.get(this.lButton).click()

    }
}