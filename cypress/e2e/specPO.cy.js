/// <reference types="cypress" />

import { MainPage } from "../page-objects/main-page";
import { LoginPage } from "../page-objects/login-page";
import { SecurePage } from "../page-objects/secure-page";

describe('Pruebas heroku app', () => {

    
    const mainPage = new MainPage();
    const loginPage = new LoginPage();
    const securePage = new SecurePage();

 
    it("The user is logged correctly", () => {
        mainPage.visitMainPage();
        mainPage.clickFormAuthentication();
        loginPage.enterUser("tomsmith");
        loginPage.enterPassword("Supersecretpassword!");
        loginPage.clickLoginButton();
        securePage.checkMessage("You are logged into secure area");

    })
})