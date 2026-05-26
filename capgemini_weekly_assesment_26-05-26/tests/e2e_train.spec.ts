import {test} from '@playwright/test'
import path from 'path'
import fs from 'fs'

import LoginPage from '../POM/login.page'
import TrainPage from '../POM/trains.page'
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

    let trainpage = new TrainPage(page)
       await trainpage.goto(data.url)
       await trainpage.closePopup()
       await trainpage.clickTrain();
       await trainpage.enterFrom(data.from);
       await trainpage.enterTo(data.to);
       await trainpage.selectDate(data.date);
       await trainpage.clickSearch();
       await trainpage.clickQuickFilter();
       await trainpage.clickRefund();
       await trainpage.SelectTrain();
       await trainpage.clickLadiesQuotaTab();
       await trainpage.clickGeneralQuotaTab();
       await trainpage.clickBookTicket();
       await trainpage.clickAddPassengerclose();
})