exports.LoginFunction =class LoginFunction
{
    constructor(page)
    {
        this.page = page;
    }

    async login(url,userName,pwd)
    {
        await this.page.goto(url)  
        await this.page.locator('#username').type(userName)
        await this.page.locator('#password').type(pwd)
        await this.page.locator('#kc-login').click()   
    }
    

    
}
//module.exports = {LoginPage}