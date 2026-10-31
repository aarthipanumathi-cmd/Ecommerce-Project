import {test} from "@playwright/test"

test("Login to sauce Demo",async({page})=>{

    let login=new login(page)
    await login.goto()
    await login.LoginToSauceDemo()


})