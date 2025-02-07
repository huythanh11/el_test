import BasePage from "./basePage";

class SignUpPage extends BasePage {
    constructor(page) {
        super(page);
        this.selectors = {
            ...this.selectors,  
            fullNameInput: '#name',
            emailInput: '#email',
            passwordInput: '#password',
            createAccountBtn: '.form__input-group.pt-1 .btn__text',
        };
    }

    async fillSignUpForm(fullName, email, password) {
        await this.page.fill(this.selectors.fullNameInput, fullName);
        await this.page.fill(this.selectors.emailInput, email);
        await this.page.fill(this.selectors.passwordInput, password);
    }

    async clickCreateAccount() {
        await this.page.click(this.selectors.createAccountBtn);
    }

    
}

export default SignUpPage;