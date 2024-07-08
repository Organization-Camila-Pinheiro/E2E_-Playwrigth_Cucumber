Feature: add a product in the shopping cart

  Scenario: Add one product in the shopping cart
    Given the costumer is on Sauce Labs login page
    When the costumer fills the username with "standard_user"
    And fills the password with "secret_sauce"
    And the costumer clicks on the login button
    And the costumer add to cart "Sauce Labs Backpack"
    And the costumer clicks on the cart button
    Then the costumer see "Sauce Labs Backpack" and the price "29.99" in the shopping cart
    
   