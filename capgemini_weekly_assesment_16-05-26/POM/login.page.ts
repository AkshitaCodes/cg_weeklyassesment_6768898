import { Page, Locator, expect } from '@playwright/test'
import BasePage from '../POM/base.page'

 class LoginPage extends BasePage{
    loginLink: Locator
    phoneInput: Locator
    continueButton: Locator

    constructor(page: Page) {
        super(page)
        this.loginLink = page.locator('.HeaderContent_loginCta__R1YIW')
        this.phoneInput = page.locator('.newLogin_input__Jviae')
        this.continueButton = page.locator('button[title="Login"]')
    }

    async openLoginModal() {
        await this.loginLink.click()
    }

    async enterPhone(phone: string) {
        await this.phoneInput.click()
        await this.phoneInput.pressSequentially(phone, {delay: 150})
    }

    async clickContinue() {
        await expect(this.continueButton).toBeEnabled()
        await this.continueButton.click()
    }
}
export default LoginPage