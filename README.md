**Timba Sign-Up Testing**

This repository contains automated Cypress tests for the Timba Sign-Up page, focusing on form validation, subscription selection, and payment flow.

**Features Tested**
1. **Sign-Up Flow**

Work Email: Validates visibility and input functionality.
Premium Subscription: Checks button clickability.

2. **Form Validation**
Fields: First Name, Last Name, Company Name, Phone Number, Country, Address.

3. **Subscription Management**
Subscription Cycle: Selection validation.
Number of Users: Increment and decrement controls.

4. **Payment Flow**
Buttons: Proceed to Checkout, Make Payment.

**Setup**

**Prerequisites**
Node.js (v14 or later)
Cypress (installed locally)

**Installation**
bash/powershell

git clone https://github.com/AdeIfeh/SignUp.git

cd SignUp

npm install

**Running Tests**
Open Cypress GUI: npx cypress open
Run Headless Tests: npx cypress run

**Author**
Adebayo Elizabeth
