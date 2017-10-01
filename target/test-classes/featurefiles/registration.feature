@SystemTest
Feature: Registration on PHPTravels
# registration through MyAccount on www.phptravels.net


Scenario: User is register successfully with valid details (Happy Path)

Given User is on the PhpTravels home page
When User goes to Signup page
And User enters valid data on the page
|Fields				|Values						|
|First Name			|Lateef						|
|Last Name			|Abdulsalam					|
|Mobile Number		|07886415505				|
|Email  			|abdulsalam1111@yahoo.com	|
|Password			|Pompkin2					|
|Confirm Password 	|Pompkin2					|
Then User registration should be succesfull
