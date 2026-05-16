import { Page, Locator } from '@playwright/test'
import BasePage from '../POM/base.page'

class LabtestPage extends BasePage {
// Locators specific to the Labtest page
    labtestMenu: Locator
    healthCheckCategory: Locator
    selectTest: Locator
    addToCart: Locator
    closePopup: Locator
    gotoCart: Locator
    addmemberButton: Locator

    firstName: Locator
    lastName: Locator
    dob: Locator

    gender: Locator
    relationDropdown: Locator
    relationOption: Locator

    confirmButton: Locator
    okButton: Locator
    selectSlot: Locator
    selectAddress: Locator
    reviewCart: Locator

    constructor(page: Page) {
    // Call the constructor of the BasePage to initialize common properties
        super(page)
    // Initialize locators specific to the Labtest page
        this.labtestMenu = page.getByRole('link', {name: 'LabTests'})
        this.healthCheckCategory = page.locator('.sV').nth(1)
        this.selectTest = page.locator('.SingleTypeListing_box__YnhUR.undefined').nth(2)
        this.addToCart = page.locator('.N.DetailsPageItemCard_addToCartCTA__O8DkF')
        this.closePopup = page.locator('img[alt="close"]')
        this.gotoCart = page.locator('.M').nth(2)
        this.addmemberButton = page.getByRole('button', { name: 'Add Member' })
        this.firstName = page.getByPlaceholder('First Name')
        this.lastName = page.getByPlaceholder('Last Name')
        this.dob = page.getByPlaceholder('dd/mm/yyyy')
        this.gender = page.locator('.AddNewProfile_genderBtns___IoHD').nth(2)
        this.relationDropdown = page.locator('.AphSelect_icon__ZgJ7h.icon-down-arrow')
        this.relationOption = page.locator('.MenuItem_root__mMLyi').nth(10)
        this.confirmButton = page.getByRole('button', { name: 'Save' })
        this.okButton = page.getByRole('button', { name: 'OK' })
        this.selectSlot = page.locator('.PatientSelection_nextActionBtn__fLmkL')
        this.selectAddress = page.locator('.AddressSelection_customRadioButton__okIPx').nth(2)
        this.reviewCart = page.locator('.SlotSelection_nextActionBtn__2OqHn')
    }
// Methods to interact with the Labtest page
    async openLabTests() {
        await this.labtestMenu.click()
    }
// Method to select the health check category
    async selectHealthCheckCategory() {
        await this.healthCheckCategory.click()
    }
// Method to choose a specific lab test
    async chooseLabTest() {
        await this.selectTest.click()
    }
// Method to add a lab test to the cart
    async addTestToCart() {
        await this.addToCart.click()
    }
// Method to close any popups that appear
    async closethePopup() {
        await this.closePopup.click()
    }
//  Method to navigate to the cart
    async openCart() {
        await this.gotoCart.click()
    }
    async addMember() {
        await this.addmemberButton.click()
    }
// Method to fill patient details
    async fillPatientDetails(
        firstName: string,
        lastName: string,
        dob: string
    ) {
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.dob.fill(dob)
    }
// Method to select gender
    async selectGender() {
        await this.gender.click()
    }
// Method to select relation
    async selectRelation() {
        await this.relationDropdown.click()
        await this.relationOption.click()
    }
// Method to confirm patient details
    async confirmPatient() {
        await this.confirmButton.click()
        await this.okButton.click()
    }
// Method to choose a time slot for the lab test
    async chooseSlot() {
        await this.selectSlot.click()
    }
// Method to select an address for sample collection
    async chooseAddress() {
        await this.selectAddress.click()
    }
// Method to review the order before placing it
    async reviewOrder() {
        await this.reviewCart.click()
    }
}
export default LabtestPage
