@tester
Feature: Login Feature

#Description: (Optional) This is the feature to login to Yahoo

Scenario: User logs in with valid loging details

Given User is on the Yahoo Login page
When User enters Username and Password
And Click Login
Then User should see my his messages


Scenario: User attempts to log in with invalid loging details

Given I am on the Yahoo Login page
When I enter my login invalid login details
And Click Login
Then Login should fail
But relogin option should be available
