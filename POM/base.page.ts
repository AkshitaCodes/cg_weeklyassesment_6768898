import { Page, Locator } from '@playwright/test'

class BasePage {
    // Common properties and methods for all pages
    page: Page
    popupClose: Locator

    constructor(page: Page) {
        this.page = page
        this.popupClose = page.locator('[id="closeButton"]')
    }

    // Common method to navigate to a URL
    async goto(url: string) {
        await this.page.goto(url)
        await this.page.waitForLoadState('domcontentloaded')
    }
    
     // Common method to close popup if it appears
    async closePopup() {
        try {
            if (await this.popupClose.isVisible()) {
                await this.popupClose.keyboard.press('Escape');
            }
        } catch {
            console.log('Popup not visible')
        }
    }
}
export default BasePage