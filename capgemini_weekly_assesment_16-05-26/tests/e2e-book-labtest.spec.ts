import { test } from '@playwright/test'
import path from 'path'
import fs from 'fs'

import LoginPage from '../POM/login.page'
import LabtestPage from '../POM/labtest.page'

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../test-data/data.json'),'utf-8'))

test('E2E Lab Test Booking Flow', async ({ page, context }) => {

    // Permissions
    await context.grantPermissions([
        'geolocation',
        'notifications'
    ])

    // Page objects
    const loginPage = new LoginPage(page)
    const labtestPage = new LabtestPage(page)

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

    // Lab Test Flow
    await labtestPage.openLabTests()
    await labtestPage.selectHealthCheckCategory()
    await labtestPage.chooseLabTest()
    await labtestPage.addTestToCart()
    await labtestPage.openCart()

    // Patient Details
    await labtestPage.fillPatientDetails(
        data.FistName,
        data.LastName,
        data.DOB
    )

    await labtestPage.selectGender()
    await labtestPage.selectRelation()
    await labtestPage.confirmPatient()

//     // Slot & Address
//     await labtestPage.chooseSlot()
//     await labtestPage.chooseAddress()
//     await labtestPage.reviewOrder()
// 
})