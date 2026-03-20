import { Page, Locator } from "@playwright/test";

export class LoginPage {
  page: Page;
  username: Locator;
  password: Locator;
  loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator("#Email");
    this.password = page.locator("#Password");
    this.loginButton = page.getByRole("button", { name: "Log in" }); 
  }

  async login(username: string, password: string) {
    await this.username.fill(username);  
    await this.password.fill(password);  
    await this.loginButton.click();
  }
}

export default LoginPage;