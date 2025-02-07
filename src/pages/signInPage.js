import BasePage from "./basePage";

class SignInPage extends BasePage {
    constructor(page) {
        super(page);
        this.selectors = {
            ...this.selectors,  
            emailInput: '[name="email"]',
            passwordInput: '[name="password"]',
            signInBtn: '.form__input-group .btn',
            rememberMeCheckbox: '[for="remember-me"]',
            errorAlertInvalidUser: '.alert-error__text'

        };
    }

    async fillLoginForm(email, password) {
        await this.page.fill(this.selectors.emailInput, email);
        await this.page.fill(this.selectors.passwordInput, password);
    }

    async clickSignIn() {
        await this.page.click(this.selectors.signInBtn);
    }

    async toggleRememberMe() {
        await this.page.getByLabel(this.selectors.rememberMeCheckbox);
    }

    async getErrormessageInvaliduser(expectedMessage) {
        const text = await this.page.textContent(this.selectors.rememberMeCheckbox);
        return text===expectedMessage;
    }
}

export default SignInPage;