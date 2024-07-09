Feature: Buy a product

  Scenario: Buy a valible product
    Given the costumer is on Sauce Labs login page
    When the costumer fills the username with "standard_user"
    And fills the password with "secret_sauce"
    And the costumer clicks on the login button
    And the costumer add to cart "Sauce Labs Backpack"
    And the costumer clicks on the cart button
    Then the costumer see "Sauce Labs Backpack" in the shopping cart
    When the costumer clicks on the checkout button
    And  the costumer fills the first name with "Camila", the last name  with "Pinheiro" and de zip code with "1234"
    And the costumer clicks on the continue button
    Then the costumer should see the "Checkout: Overview" title
    When the costumer clicks on the finish button
    Then the user should see the buy complete message "Thank you for your order!" 

    

