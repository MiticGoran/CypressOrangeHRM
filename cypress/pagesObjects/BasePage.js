class BasePage 
{
    goToBaseUrl()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    }
}

export default BasePage;