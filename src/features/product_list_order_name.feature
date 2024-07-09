Feature: See product list order by name

  Scenario: Order products by name A to Z

    Given the costumer is on Sauce Labs login page
    When the costumer fills the username with "standard_user"
    And fills the password with "secret_sauce"
    And the costumer clicks on the login button
    And the costumer clicks on the filter name A to Z 
    Then the costumer should see the first product with name "Sauce Labs Backpack"
    And the costumer should see the last product with name "Test.allTheThings() T-Shirt (Red)"


    Scenario: Order products by name Z to A

    Given the costumer is on Sauce Labs login page
    When the costumer fills the username with "standard_user"
    And fills the password with "secret_sauce"
    And the costumer clicks on the login button
    And the costumer clicks on the filter name Z to A
   Then the costumer should see the first product with name "Test.allTheThings() T-Shirt (Red)"
    And the costumer should see the last product with name "Sauce Labs Backpack"