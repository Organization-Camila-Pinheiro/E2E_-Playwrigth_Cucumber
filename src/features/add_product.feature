Feature: add a product in the shopping cart

  Scenario: Add one valible product in the shopping cart
    Given the costumer is on Sauce Labs login page
    When the costumer fills the username with "standard_user"
    And fills the password with "secret_sauce"
    And the costumer clicks on the login button
    And the costumer add to cart "<addProduct>"
    And the costumer clicks on the cart button
    Then the costumer see "<productCart>" in the shopping cart
    
  Examples:
  |addProduct              | productCart              |  
  |Sauce Labs Backpack     | Sauce Labs Backpack      | 
  |Sauce Labs Bike Light   | Sauce Labs Bike Light    | 
  |Sauce Labs Fleece Jacket| Sauce Labs Fleece Jacket | 