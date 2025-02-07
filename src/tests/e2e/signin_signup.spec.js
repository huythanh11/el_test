import { test, expect } from '@playwright/test';
import HomePage from '../../pages/homePage';
import WelcomePage from '../../pages/welcomePage';
import SignUpPage from '../../pages/signUpPage';
import SignInPage from '../../pages/signInPage';
import { testData } from '../../data/testdata';

test.describe('Authentication Tests', () => {
    let homePage;
    let welcomePage;
    let signUpPage;
    let signInPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        welcomePage = new WelcomePage(page);
        signUpPage = new SignUpPage(page);
        signInPage = new SignInPage(page);
    });

    test('should login with valid credentials', async ({page}) => {
        await homePage.launchHomePage();
        await homePage.clickSignUpButton();
        await welcomePage.clickLetSignIn();
        await signInPage.fillLoginForm(
            testData.validUser.email,
            testData.validUser.password
        );
        
        await signInPage.toggleRememberMe();

    // dont want to create draft data for signin so comment this action and with using dummy email
    //  await signInPage.clickSignIn();
        

    });

    test('should sign up with new account', async ({ page }) => {
        const newUser = testData.getNewUser();
        await homePage.launchHomePage();
        await homePage.clickSignUpButton();  
        await welcomePage.clickCreateAccount();
        await signUpPage.fillSignUpForm(
            newUser.fullName,
            newUser.email,
            newUser.password
        );
        // dont want to create draft data so comment this action
        // await signUpPage.clickCreateAccount();
        
    });

});
