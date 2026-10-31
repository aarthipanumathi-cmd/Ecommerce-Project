import {test} from "@playwright/test"

import Product from "POM/ProductPage.js"
import Login from "POM/LoginPage.js"

test("add product to Cart",async({page}) => {

    let product= new product(page)
    let login=new Login(page)
    await login.LoginToSaucDemo

    await product.AddToCart()
    await product.OpenCart()

})