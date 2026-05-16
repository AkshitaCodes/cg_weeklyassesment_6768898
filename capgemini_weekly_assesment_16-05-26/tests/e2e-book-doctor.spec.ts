import { test } from '@playwright/test'
import path from 'path'
import fs from 'fs'

import LoginPage from '../POM/login.page'
import DoctorPage from '../POM/doctor.page'

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../test-data/data.json'),'utf-8'))

test('E2E Doctor Appointment Booking', async ({ page, context }) => {
    // Permissions
    await context.grantPermissions([
        'geolocation',
        'notifications'
    ])

    // Page objects
    const loginPage = new LoginPage(page)
    const doctorPage = new DoctorPage(page)

    // Navigate
    await loginPage.goto(data.url)

    // Close popup
    await loginPage.closePopup()

    // Login
    await loginPage.openLoginModal()
    await loginPage.enterPhone(data.phoneNumber)
    await loginPage.clickContinue()

    // Manual OTP
    await page.pause()

    // Doctor Booking Flow
    await doctorPage.openDoctorSection()
    await doctorPage.selectSpeciality()
    await doctorPage.selectDoctor()
    // await doctorPage.selectDateAndTime()
    await doctorPage.scheduleAppointment()
    
    // await doctorPage.closePatientDialog()
})