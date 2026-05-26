import { Page, expect, Locator } from "@playwright/test";
import BasePage from "./base.page";

export default class TrainPage extends BasePage {
    page: Page;
    train: Locator;
    from: Locator;
    to: Locator;
    data:Locator;
    Searchtrain: Locator;
    quickfilter: Locator;
    refund: Locator;
    selectTrain: Locator;
    ladiesQuotaTab: Locator;
    generalQuotaTab: Locator;
    bookTicket: Locator;
    addPassengerclose: Locator;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.train = page.locator('.font-medium.flex.items-center.gap-5.cursor-pointer').nth(6)
        this.from = page.getByPlaceholder('Enter Origin');
        this.to = page.getByPlaceholder('Enter Destination');
        this.data = page.locator('.border.rounded-8.text-center.overflow-hidden.border-neutral-300').nth(1);
        this.Searchtrain = page.getByRole('button', { name: 'Search' });
        this.quickfilter = page.getByText('Best Available');
        this.refund = page.getByText('Get a full train fare refund');
        this.selectTrain = page.locator('.text-success-subtle').first();
        this.ladiesQuotaTab = page.getByRole('tab', { name: 'Ladies', exact: true });
        this.generalQuotaTab = page.getByRole('tab', { name: 'General', exact: true });
        this.bookTicket = page.locator('.body-xs.truncate').nth(1);
        this.addPassengerclose = page.getByTestId('CloseIcon');
    }
    async clickTrain() {
        await this.train.click();
    }
    async enterFrom(from: string) {
        await this.from.click();
        await this.from.fill(from);
        const stationOption = this.page.locator('div[role="listitem"]')
            .filter({ hasText: new RegExp(from, 'i') })
            .first();
        await stationOption.waitFor({ state: 'visible', timeout: 5000 });
        await stationOption.click();
    }
    async enterTo(to: string) {
        await this.to.click();
        await this.to.fill(to);
        const stationOption = this.page.locator('div[role="listitem"]')
            .filter({ hasText: new RegExp(to, 'i') })
            .first();

        await stationOption.waitFor({ state: 'visible', timeout: 5000 });
        await stationOption.click();
    }
    async selectDate(date: string) {
        await this.data.click();
        // await this.page.getByRole('button', { name: new RegExp(date, 'i') }).click();
    }
    async clickSearch() {
        await this.Searchtrain.click();
    }       
    async clickQuickFilter() {
    await this.quickfilter.waitFor({ state: 'visible' });
    await this.quickfilter.click(); 
    await this.page.getByText('AC Only').click();
    }
    async clickRefund() {
        await this.refund.click();
    }
    async SelectTrain() {
        await this.selectTrain.click();
    }
    async clickLadiesQuotaTab() {
        await this.ladiesQuotaTab.click();
    }
    async clickGeneralQuotaTab() {
        await this.generalQuotaTab.click();
    }
    async clickBookTicket() {
        await this.bookTicket.click();
    }
    async clickAddPassengerclose() {
        await this.addPassengerclose.click();
    }

}
