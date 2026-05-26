import {test} from '@playwright/test'
import path from 'path'
import fs from 'fs'

import LoginPage from '../POM/login.page'
import FlightPage from '../POM/flight.page'
const dataPath = path.join(__dirname, '../utility/data.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

test ('End to End',async ({page}) => {
    let loginPage = new LoginPage(page)
    await loginPage.goto(data.url)
    await loginPage.closePopup()
    await loginPage.login(data);
    await loginPage.enterMobileNumber(data.mobile)
    await loginPage.clickContinue()

    await page.pause()

    let flightPage = new FlightPage(page)
    await flightPage.goto(data.url)
    await flightPage.closePopup()
    await flightPage.clickFlight();
    await flightPage.fromCity(data.from);
    await flightPage.toCity(data.to);
    await flightPage.clickSearch();
    await flightPage.clickSelectFlight();
    await flightPage.clickBookFlight();

})