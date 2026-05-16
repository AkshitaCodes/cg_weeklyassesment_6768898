import { Page, Locator } from '@playwright/test'
import BasePage from '../POM/base.page'

class DoctorPage extends BasePage {
// Locators specific to the Doctor page
    doctorMenu: Locator
    speciality: Locator
    doctorCard: Locator
    date: Locator
    time: Locator
    scheduleButton: Locator
    closePatientPopup: Locator

    constructor(page: Page) {
        super(page) // Call the constructor of the BasePage to initialize common properties

        // Initialize locators specific to the Doctor page
        this.doctorMenu = page.locator('.lx').nth(1)
        this.speciality = page.locator('.Jl_').nth(1)
        this.doctorCard = page.locator('.DoctorCard_doctorCard__1agPm').nth(1)
        // this.date = page.locator('').
        // this.time = page.locator('..slots_slotTime__YVAqi').nth(3)
        this.scheduleButton = page.locator('.N.slots_bookingCta__PZGMB.slots_desktop__Rv_Pi')
        this.closePatientPopup = page.locator('.CheckoutPatientSelectionDialog_headBox__yAgmN')
    }
// Methods to interact with the Doctor page
    async openDoctorSection() {
        await this.doctorMenu.click()
    }
// Method to select a speciality
    async selectSpeciality() {
        await this.speciality.click()
    }
// Method to select a doctor
    async selectDoctor() {
        await this.doctorCard.click()
    }
// // Method to select a date and time
//     async selectDateAndTime() {
//         await this.date.click()
//         await this.time.click()
//     }
// Method to schedule an appointment
    async scheduleAppointment() {
        await this.scheduleButton.click()
    }
// Method to close the patient selection popup
    // async closePatientDialog() {
    //     await this.closePatientPopup.click()
    // // }
}
export default DoctorPage