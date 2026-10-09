import {expect, test} from "@playwright/test"
import Register from "../PageObjectModel/Register.Page"
import RegisterData from "../TestData/RegisterData.json"

test("Register User",async({page}) =>{
   
    let registerPage = new Register(page)

    //navigate to url and verify
    await registerPage.goto('/')
    await expect(page).toHaveURL("https://automationexercise.com/")
    await expect(page.getByAltText("Website for automation practice")).toBeVisible()

    //click on signup/login and verify
    await registerPage.clickSignupLogin()
    await expect(page).toHaveURL("/login")
    await expect(registerPage.newUserSignupText).toBeVisible()
    
    //Enter Name and Email
    await registerPage.nameTextfield.fill(RegisterData.name)
    await registerPage.emailTextield.fill(RegisterData.email)
    await registerPage.clickSignup()
    await expect(registerPage.accountInfoText).toBeVisible("Enter Account Information")

})