Feature: Login sauceDemo

  Background: 
  Given the costumer is on Sauce Labs login page
 
  Scenario: Login with invalid password
    When the costumer fills the username with "standard_user"
    And fills the password with "wrong"
    And the costumer clicks on the login button 
    Then the costumer should see an error message "Username and password do not match any user in this service"

  Scenario: Login with empty username and password
   When the costumer clicks on the login button
   Then the costumer should see an error message "Username is required"

