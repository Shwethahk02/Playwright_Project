
class Register{
 /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page){
       this.page=page
      this.signupOrLoginButton = page.getByRole("link",{name:" Signup / Login"})
      this.newUserSignupText =page.locator('//h2[text()="New User Signup!"]')
      this.nameTextfield = page.getByPlaceholder("Name")
      this.emailTextield = page.locator('//input[@data-qa="signup-email"]')
      this.signupButton = page.getByRole("button",{name:"Signup"})
      this.accountInfoText = page.locator('//b[text()="Enter Account Information"]')
      this.maleRadioButton = page.locator('#uniform-id_gender1')
    }

    async goto(url){
      await this.page.goto(url)
      
    }
    async clickSignupLogin() {
    await this.signupOrLoginButton.click();
  }
  async clickSignup(){
     await this.signupButton.click()
  }
}  

export default Register