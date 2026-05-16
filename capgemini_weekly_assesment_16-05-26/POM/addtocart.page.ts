import{Page,expect,Locator} from '@playwright/test'
import path from "path"
import fs from "fs"
const login=fs.readFileSync(path.join(__dirname,"../test-data/data.json"),"utf-8")
const data=JSON.parse(login)
class addtocart{
    page:Page
    PopUp:Locator
    addtocart:Locator
    selectAddress:Locator
    addNewAddress:Locator
    searchAddress:Locator
    selectSearchedAddress:Locator
    houseNo:Locator
    saveAddress:Locator
    orderingFor:Locator
    saveAs:Locator
    recipientName:Locator
    saveAddress:Locator
    proceedToPay:Locator
    constructor(page:Page){
        this.page=page
        this.PopUp = page.locator('[id="close"]');
        this.addtocart=page.locator('.Pp.er')
        this.selectAddress=page.locator('.CartAddress_addressAction__clmEn-')
        this.addNewAddress=page.locator('.AddNewAddressRevamped_icon-plus__NooGk AddNewAddressRevamped_ctaIcon__us6h9-')
        this.searchAddress=page.getByPlaceholder('Search for society, locality, pincode...')
        this.selectSearchedAddress = page.getByText('Vinayak Tower (VT)')
        this.page.goto("https://www.apollopharmacy.in/")
        this.page.waitForLoadState('domcontentloaded')
        this.houseNo=page.getByPlaceholder('Type here')
        this.saveAddress=page.locator('.icon-ic_arrow_right NewAddressForm_arrowIcon__WjTRe')
        this.orderingFor=page.locator('#myself')
        this.saveAs=page.locator('.NewAddressForm_sentenceCase__sX2Mz').nth(1)
        this.recipientName=page.getByPlaceholder('Type here')
        this.saveAddress=page.locator('.BN.NewAddressForm_btnTab1__Bbdu6.FN.GN')
        this.proceedToPay=page.locator('.primaryPharmaBtn__YWdBa.fullWidth__OZ3XV.centerContent__-eluq')
    }
    async goto(){
        await this.page.goto("https://www.apollopharmacy.in/")
        await this.page.waitForLoadState('domcontentloaded')
    }
    async AddToCart(){
        try {
            if (await this.PopUp.isVisible()) {
                await this.PopUp.click();
            }
        } catch {
            console.log('Popup not visible');
        }
        await this.addtocart.click()
        await this.selectAddress.click()
        await this.addNewAddress.click()
        await this.searchAddress.click()
        await this.searchAddress.fill(data.searchAddress)
        await this.selectSearchedAddress.click()
        await this.houseNo.click()
        await this.houseNo.fill(data.HouseNo)
        await this.saveAddress.click()
        await this.orderingFor.click()
        await this.saveAs.click()
        await this.recipientName.click()
        await this.recipientName.fill(data.recipientName)
        await this.saveAddress.click()
        await this.proceedToPay.click() 
    }
  }