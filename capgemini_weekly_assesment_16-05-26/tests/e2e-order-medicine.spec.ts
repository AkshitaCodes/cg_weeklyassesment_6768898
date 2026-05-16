import { test } from '@playwright/test'
import path from 'path'
import fs from 'fs'

import LoginPage from '../POM/login.page'
import PainReliefPage from '../POM/painRelief.page'

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../test-data/data.json'),'utf-8'))

test('E2E Order Medicine Flow', async ({ page, context }) => {
// Grant permissions
    await context.grantPermissions([
        'geolocation',
        'notifications'
    ])

    // Page objects
    const loginPage = new LoginPage(page)
    const painReliefPage = new PainReliefPage(page)

    // Navigate
    await loginPage.goto(data.url)

    // Close popup
    await loginPage.closePopup()

    // Login Flow
    await loginPage.openLoginModal()
    await loginPage.enterPhone(data.phoneNumber)
    await loginPage.clickContinue()

    // Manual OTP
    await page.pause()

    // Pain Relief Flow
    await painReliefPage.openPainReliefSection()
    // await painReliefPage.sortProductsHighToLow()
    await painReliefPage.selectMedicine()
    // await painReliefPage.increaseQuantity()
    await painReliefPage.viewShoppingCart()
})