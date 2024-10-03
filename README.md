# BNB-Annual-Revenue-Estimate

## Overview
This HTML and JavaScript code is designed to estimate annual revenue based on two key inputs: occupancy percentage and average daily rate. The calculator takes these inputs from the user, computes the annual revenue, and displays the result.

## Structure
The layout is composed of two main sections:

Input Section: Where users can enter occupancy percentage and average daily rate.
Result Section: Where the estimated annual revenue is displayed after the calculation.
## Files
HTML File:

Contains the structure for the input fields and the result display.
Includes a button that, when clicked, triggers the JavaScript function to calculate the revenue.
JavaScript (Embedded in HTML):

Handles the logic to compute the annual revenue based on the input values.
## Components
### 1. Inputs
Occupancy (%):

This is the percentage of occupancy for the business, e.g., hotel rooms or apartments.
The value must be between 0 and 100.
Default value is set to 48%.
Average Daily Rate ($):

The average daily rate (ADR) that customers are paying, set in dollars.
Default value is set to $365.
### 2. Button
Calculate Annual Revenue:
Clicking this button runs the calculateAnnualRevenue() JavaScript function, which computes the estimated annual revenue based on the entered inputs.
### 3. Results
The Annual Revenue Estimate section displays the computed result, updating automatically after calculation.

## JavaScript Function: calculateAnnualRevenue()
The calculateAnnualRevenue() function retrieves the values from the input fields for occupancy percentage and average daily rate, then calculates the estimated annual revenue using the following formula:

javascript
Copy code
annualRevenue = (occupancy / 100) * dailyRate * 365;
Steps:
The function retrieves values from the input fields (occupancy and dailyRate).
It then calculates the annual revenue based on the formula.
Finally, it updates the result section in the HTML, showing the revenue in dollars, formatted to two decimal places.
## Example:
Occupancy (%): 48
Average Daily Rate ($): 365
The formula applied:

plaintext
Copy code
Annual Revenue = (48 / 100) * 365 * 365
               = $63,852.00
## How to Use:
Enter the desired Occupancy Percentage (between 0 and 100).
Enter the Average Daily Rate (in dollars).
Click the Calculate Annual Revenue button.
The estimated annual revenue will appear under the Annual Revenue Estimate section.
## Customisation:
Occupancy Value: You can modify the default value (48%) or limit the range (min and max) as per your requirement.
Average Daily Rate Value: Adjust the default daily rate ($365) or remove the minimum constraint if necessary.
Further Modifications: You can extend the script to include additional calculations, such as taxes, fees, or other business metrics.
