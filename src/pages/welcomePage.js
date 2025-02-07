class WelcomePage {
    constructor(page) {
        this.page = page;
        this.selectors = {
            createAccountBtn: '.login-selection__footer button',
            signInBtn: '.login-selection__footer button'
        };
    }

    async clickCreateAccount() {
        await this.page.locator(this.selectors.createAccountBtn).first().click();
    }

    async clickLetSignIn() {
        await this.page.locator(this.selectors.signInBtn).last().click();
    }
}

export default WelcomePage;