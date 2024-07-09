Feature: remove a product in the shopping cart

  Scenario: remove one product in the shopping cart

    Given the costumer is on Sauce Labs login page
    When the costumer fills the username with "standard_user"
    And fills the password with "secret_sauce"
    And the costumer clicks on the login button
    And the costumer add to cart "Sauce Labs Backpack"
    And the costumer clicks on the cart button
    And the costumer see "Sauce Labs Backpack" in the shopping cart
    And the costumer clicks on the remove button
    Then the costumer should not see "Sauce Labs Backpack" in the shopping cart
    