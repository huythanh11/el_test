import { CONFIG } from '../../config/config.js'; 
import BasePage from './basePage.js';

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.selectors = {  
            SIGN_UP_BUTTON: '.header__menu-items .btn__text',
        }
    }

    async clickSignUpButton() {
        await this.click(this.selectors.SIGN_UP_BUTTON);
    }

    async launchHomePage() {
        if (!CONFIG.baseUrl) {
            throw new Error('baseUrl is not defined in CONFIG');
        }
        await this.goto(CONFIG.baseUrl);
    }

}

export default HomePage;