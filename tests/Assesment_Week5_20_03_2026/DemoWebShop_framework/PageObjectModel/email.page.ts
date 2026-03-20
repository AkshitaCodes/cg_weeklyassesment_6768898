import { Page, Locator } from "@playwright/test";

class EmailPage {
  page: Page;
  friendEmail: Locator;
  yourEmail: Locator;
  message: Locator;
  sendBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.friendEmail = page.locator('#FriendEmail');
    this.yourEmail = page.locator('#YourEmailAddress');
    this.message = page.locator('#PersonalMessage');
    this.sendBtn = page.locator('.button-1.send-email-a-friend-button');
  }

  async sendEmail() {
    await this.friendEmail.fill("abc@gmail.com");
    await this.yourEmail.fill("akshitajain@gmail.com");
    await this.message.fill("hello i m sending u a gift card");
    await this.sendBtn.click();
  }
}

export default EmailPage;