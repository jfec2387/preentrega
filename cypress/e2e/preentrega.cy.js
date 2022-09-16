import { RegistroPage } from "../support/pages/registroPage"
import { LoginPage } from "../support/pages/loginPage"
import { HomePage } from "../support/pages/homePage"
import { ProductosPage } from "..//support/pages/productosPage"
import { ShoppingCartPage } from "..//support/pages/shoppingPage"

describe('Pre Entrega Pushing IT', () => {
    let loginusuario, productossel
    const registroPage = new RegistroPage();
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const productosPage = new ProductosPage();
    const shoppingcartPage = new ShoppingCartPage();

    before("Before", () => {
        cy.fixture("datoslogin").then(datos => {
            loginusuario = datos;
        })
        cy.fixture("productos").then(datos => {
            productossel = datos;
        })
    })

    beforeEach("Before each", () => {
        cy.visit("/")
        registroPage.clickIniciarSesioButton();
        loginPage.escribirUsuario(loginusuario.username);
        loginPage.escribirContraseña(loginusuario.password);
        loginPage.clickLoginButton();
        homePage.clickOnlineShopLink();

        
    })

    it('Ingresar al sistema con datos validos', () => {
        productosPage.selecionarProductos(productossel.producto1.nombre)
        productosPage.clickCloseButton()
        productosPage.selecionarProductos(productossel.producto2.nombre)
        productosPage.clickCloseButton()
        productosPage.clickShoppingCart()
        shoppingcartPage.verificarNombre(productossel.producto1.nombre)
        shoppingcartPage.verificarNombre(productossel.producto2.nombre)
        shoppingcartPage.verificarPrecio(productossel.producto1.nombre, productossel.producto1.precio)
        shoppingcartPage.verificarPrecio(productossel.producto2.nombre, productossel.producto2.precio)
        shoppingcartPage.clickShowTotalPriceButton()
        shoppingcartPage.verificarPrecioAcumulado(`${productossel.producto1.precio + productossel.producto2.precio}`)
        cy.log()
    })

}) 
