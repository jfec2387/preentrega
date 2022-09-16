import { RegistroPage } from "../support/pages/registroPage"
import { LoginPage } from "../support/pages/loginPage"
import { HomePage } from "../support/pages/homePage"
import { ProductosPage } from "..//support/pages/productosPage"
import { ClosePage } from "../support/pages/closePage"
import { ShoppingCartPage} from "..//support/pages/shoppingPage"

describe('Pre Entrega Pushing IT', () => {
    let loginusuario, productossel, texto
    const regisPage = new RegistroPage();
    const logPage = new LoginPage();
    const homPage = new HomePage();
    const prodPage = new ProductosPage();
    const cloPage = new ClosePage();
    const shopPage = new ShoppingCartPage();

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
        regisPage.clickIniciarSesioButton();
        logPage.escribirUsuario(loginusuario.username);
        logPage.escribirContraseña(loginusuario.password);
        logPage.clickLoginButton();
        homPage.clickOnlineShopLink();

        
    })

    it('Ingresar al sistema con datos validos', () => {
        prodPage.selecionarProducto1(productossel.producto1)
        prodPage.clickAddtocar1()
        cloPage.clickCloseButton()
        prodPage.selecionarProducto2(productossel.producto2)
        prodPage.clickAddtocar2()
        cloPage.clickCloseButton()
        prodPage.clickShoppingCart()
        shopPage.verificarNombre(productossel.producto1.nombre)
        shopPage.verificarNombre(productossel.producto2.nombre)
        shopPage.verificarPrecio(productossel.producto1.nombre, productossel.producto1.precio)
        shopPage.verificarPrecio(productossel.producto2.nombre, productossel.producto2.precio)
        shopPage.clickShowTotalPriceButton()
        shopPage.verificarPrecioAcumulado(`${productossel.producto1.precio + productossel.producto2.precio}`)
        cy.log()
    })

}) 
