Feature: Calculator 

   Add minus and times functionality

   Scenario: Calculator Add function

   Given a web browser is on the calculation website
   When the user adds two numbers "3" and "5"
   Then the output displays "8"

   Scenario: Calculator minus function

   Given a web browser is on the calculation website
   When the user subtracts two numbers "16" and "1"
   Then the output displays "15"

   Scenario: Calculator times function

   Given a web browser is on the calculation website
   When the user multiplies two numbers "2" and "16"
   Then the output displays "32"

