import {Page, expect, Locator} from '@playwright/test'
import BasePage from './base.page'

class LoginPage extends BasePage {
    page: Page;
    loginbutton: Locator;
    mobileNumberInput: Locator;
    continueButton: Locator;
    

    constructor(page: Page) {
        super(page);
        this.page = page; 
        this.loginbutton = page.getByRole('button', { name: 'Log in/Sign up' }).nth(1);
        this.mobileNumberInput = page.getByPlaceholder('Enter Mobile Number');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }
    async login(mobile: string) {
        await this.loginbutton.click();
    }
    async enterMobileNumber(mobile: string) {
        await this.mobileNumberInput.click();
        await this.mobileNumberInput.pressSequentially(mobile);
    }
    async clickContinue() {
        await this.continueButton.click();
        // await this.page.pause();

    }
} 

export default LoginPage