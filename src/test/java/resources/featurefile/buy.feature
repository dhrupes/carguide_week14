Feature: Search functionality

  As user I want to check buy search page

  Scenario Outline: Search the buy car with model
    Given I am on homepage
    When I mouse hover on "buy+sell" tab
    And I click 'Search Cars' link
    Then I navigate to 'new and used car search' page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results

    Examples:
      | make    | model    | location             | price   |
      | Audi    | A1       | NSW - Far West       | $40,000 |
      | BMW     | 2 Series | Mid North Coast, NSW | $40,000 |
      | Ford    | Couriers | New England, NSW     | $25,000 |
      | Honda   | Accords  | Newcastle, NSW       | $20,000 |
      | Jeep    | Compass  | Illawarra, NSW       | $30,000 |
      | Hyundai | Getz     | NT                   | $35,000 |

  Scenario Outline: Search the used car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click 'Used' link
    Then I navigate to 'Used Cars For Sale' page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
      | make | model | location | price |
      | Audi    | A3     | Far North Coast, NSW | $25,000 |
      | Holden  | Calais | New England, NSW     | $20,000 |
      | Hyundai | I30s   | Newcastle, NSW       | $30,000 |
      | Kia     | Picanto| Illawarra, NSW       | $30,000 |
      | Renault | Clios  | QLD                  | $35,000 |
      | Suzuki  | Sierra | NSW                  | $35,000 |