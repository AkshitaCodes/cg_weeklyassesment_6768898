import { Page, Locator } from '@playwright/test'
import BasePage from '../POM/base.page'

class PainReliefPage extends BasePage{
  // Locators specific to the Pain Relief page
    painReliefLink: Locator 
    sortDropdown: Locator
    highToLow: Locator
    selectProduct: Locator
    addQuantity: Locator
    viewCart: Locator

    // Initialize locators in the constructor
    constructor(page: Page) {
        super(page)
        this.painReliefLink = page.locator('._').nth(4)
        this.sortDropdown = page.locator('.ProductSortWeb_arrow__smwA7')
        // this.highToLow = page.getByRole('radio', { name: 'Price: High to Low' })
        this.selectProduct = page.getByRole('button', { name: 'Add' }).nth(0)
        // this.addQuantity = page.locator('.oZ')
        this.viewCart = page.getByRole('button', { name: 'View Cart' })
    }

    // Methods to interact with the Pain Relief page
    async openPainReliefSection() {
        await this.painReliefLink.click()
    }
    // Method to sort products from high to low
    // async sortProductsHighToLow() {
    //     await this.sortDropdown.click()
    //     await this.highToLow.click()
    // }
    // Method to select a product
    async selectMedicine() {
        await this.selectProduct.click()
    }
    // Method to increase quantity
    // async increaseQuantity() {
    //   await this.addQuantity.click()
    // }
    // Method to view the shopping cart
    async viewShoppingCart() {
        await this.viewCart.click()
    }
}
export default PainReliefPage 