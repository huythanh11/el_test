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

    test('should sign up with no input information', async () => {
        const newUser = testData.getNewUser();
        await homePage.launchHomePage();
        await homePage.clickSignUpButton();  
        await welcomePage.clickCreateAccount();
        await signUpPage.clickCreateAccount();
        await signUpPage.validateMessage('fullname', 'Full name is required');
        await signUpPage.validateMessage('email', 'Email is required');
        await signUpPage.validateMessage('password', 'Password is required');
    });


    test('login with no data', async () => {
        await homePage.launchHomePage();
        await homePage.clickSignUpButton();
        await welcomePage.clickLetSignIn();
        await signInPage.clickSignIn();
        await signInPage.validateMessage('email', 'Email is required');
        await signInPage.validateMessage('password', 'Password is required');

    });

    test('login with invalid data', async () => {
        await homePage.launchHomePage();
        await homePage.clickSignUpButton();
        await welcomePage.clickLetSignIn();
        await homePage.launchHomePage();
        await homePage.clickSignUpButton();
        await welcomePage.clickLetSignIn();
        await signInPage.fillLoginForm(
            testData.validUser.email,
            testData.validUser.password
        );
        await signInPage.clickSignIn();
        await signInPage.getErrormessageInvaliduser('We couldn’t sign you in! Make sure you enter the correct password. If the problem persists, consider resetting your password or creating a new account.');

    });


    

});