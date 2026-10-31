class login{
    constructor(){
        this.page=this.page;
        this.page=this.page;
        this.username=page.getByPlaceholder("Username")
        this.password=page.getByPlaceholder("Passwoed")
        this.loginButton=this.page.getByRole('button'{name:"Login"})
        this.errorMesg=this.page.locator(".error-message-container.error")
    }

    async goto(){
        await this.page("https://www.saucedemo.com/")
    }

    async LoginToSaucDemo(){
        await this.page("https://www.saucedemo.com/")
        await this.username.fill("standard_user")
        await this.password.fill("secret_sauce")
        await this.loginButton.click()

    }
    

    

    async ClickLoginBtn(){
        await this.loginButton.click()
        
    }


    async getErrorMsg(){
        return await this.getErrorMsg.textContent();
    }


}

export default Login
