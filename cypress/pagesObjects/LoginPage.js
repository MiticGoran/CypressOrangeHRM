
class LoginPage
{

    setUserName(username)
    {
       cy.xpath("//input[@name='username']").type(username);
       //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
    }

    setPassword(password)
    {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
    }

    clickSubmit()
    {
        cy.get('.oxd-button').click();
    }

    verifyLogin()
    {
        cy.get('.oxd-topbar-header-title').should('have.text', 'Dashboard');
    }

}

export default LoginPage;