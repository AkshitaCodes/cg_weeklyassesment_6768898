import { Page, Locator } from "@playwright/test";

class RegisterPage {
  page: Page;
  gender: Locator;
  firstname: Locator;
  lastname: Locator;
  email: Locator;
  password: Locator;
  confirmPassword: Locator;
  registerbtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.gender = page.locator('.gender-female');
    this.firstname = page.locator('#FirstName');
    this.lastname = page.locator('#LastName');
    this.email = page.locator('#Email');
    this.password = page.locator('#Password');
    this.confirmPassword = page.locator('#ConfirmPassword');
    this.registerbtn = page.getByRole('button', { name: 'Register' });
  }
async register() {
  await this.page.waitForURL('**/register');

  await this.page.locator('#gender-female').click();
  await this.firstname.fill("Akshita");
  await this.lastname.fill("Jain");
  await this.email.fill(`test${Date.now()}@mail.com`);
  await this.password.fill("123456");
  await this.confirmPassword.fill("123456");
  await this.registerbtn.click();
}
}

export default RegisterPage;