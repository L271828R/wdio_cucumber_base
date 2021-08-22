Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I want to search the book 'Dune'
    When I go to the first option
    Then I should see the 'ADD TO CART' element

