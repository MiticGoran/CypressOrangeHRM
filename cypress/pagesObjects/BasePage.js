class BasePage 
{
    goToBaseUrl()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
}

export default BasePage;