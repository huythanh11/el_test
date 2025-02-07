class BasePage {
    constructor(page) {
        this.page = page;
        this.selectors = {
            errorMessage_Fullname:'.form__input-group:nth-child(1) .form__validation-message span',
            errorMessage_Email:'.form__input-group:nth-child(2) .form__validation-message span',
            errorMessage_Password:'.form__input-group:nth-child(3) .form__validation-message span'
        };
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async navigate(path) {
        await this.page.goto(path);
    }

    async waitForElement(selector) {
        const element = this.page.locator(selector);
        await element.waitFor({ state: 'visible' });
        return element;
    }

    async click(selector) {
        const element = await this.waitForElement(selector);
        await element.click();
    }

    async fill(selector, text) {
        const element = await this.waitForElement(selector);
        await element.fill(text);
    }

    async getText(selector) {
        const element = await this.waitForElement(selector);
        return element.innerText();
    }

    async isElementVisible(selector) {
        const element = this.page.locator(selector);
        return await element.isVisible();
    }

    async getErrorMessage(type) {
        let selector;
        switch(type.toLowerCase()) {
            case 'fullname':
                selector = this.selectors.errorMessage_Fullname;
                break;
            case 'email':
                selector = this.selectors.errorMessage_Email;
                break;
            case 'password':
                selector = this.selectors.errorMessage_Password;
                break;
            default:
                throw new Error(`Invalid error message type: ${type}`);
        }
        if (!selector) {
            throw new Error(`Selector not found for type: ${type}`);
        }
        await this.page.waitForSelector(selector, { state: 'visible', timeout: 5000 });
        return await this.page.textContent(selector); 
    }

    async validateMessage(type, expectedMessage) {
        const actualMessage = await this.getErrorMessage(type);
        
        switch(type.toLowerCase()) {
            case 'fullname':
                return actualMessage === expectedMessage;
            case 'email':
                return actualMessage === expectedMessage;
            case 'password':
                return actualMessage === expectedMessage;
            default:
                throw new Error(`Invalid validation type: ${type}`);
        }
    }

}

export default BasePage;