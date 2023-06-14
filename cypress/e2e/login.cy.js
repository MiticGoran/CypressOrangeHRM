import LoginPage from "../pagesObjects/LoginPage"
import BasePage from "../pagesObjects/BasePage";
const loginPage = new LoginPage();
const basePage = new BasePage();

describe('Login Tests', () => {
  it('TC 01: Login with valid credentials', () => {
      basePage.goToBaseUrl();
      loginPage.setUserName("Admin");
      loginPage.setPassword("admin123");
      loginPage.clickSubmit();
      loginPage.verifyLogin();
  })
})