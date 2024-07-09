Feature: See product list order by price

  Scenario: Order products by price low to high

    Given the costumer is on Sauce Labs login page
    When the costumer fills the username with "standard_user"
    And fills the password with "secret_sauce"
    And the costumer clicks on the login button
    And the costumer clicks on the filter price low to high
    Then the costumer should see the first product with price "7.99"
    And the costumer should see the last product with price "49.99"


    Scenario: Order products by price high to low

    Given the costumer is on Sauce Labs login page
    When the costumer fills the username with "standard_user"
    And fills the password with "secret_sauce"
    And the costumer clicks on the login button
    And the costumer clicks on the filter price high to low
    Then the costumer should see the first product with price "49.99"
    And the costumer should see the last product with price "7.99"