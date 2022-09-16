export class Navbar {
  

    verificarUsuario(username){
        cy.get(`[id^='user_${username}_']`).should("be.visible")
    }

}