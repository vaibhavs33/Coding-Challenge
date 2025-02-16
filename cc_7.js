//Task 1 - Customer Invoice Calculation

//Function to calculate the final invoice amount by adding tax and subtracting a discount from the subtotal
function calculateInvoice(subtotal, taxRate, discount) {
    //Calculates the total by applying the tax and discount
    const total = (subtotal + (subtotal * taxRate)) - discount;

    //Total invoice amount is logged to the console to two decimal places
    console.log(`Total invoice: $${total.toFixed(2)}`);
};

//Test cases - Values can be changed
calculateInvoice(100, 0.08, 5); //Expected output: $103.00
calculateInvoice(500, 0.1, 20); //Expected output: $530.00

//Task 2 - Employee Hourly Wage Calculation

//Function expression that calculates the hourly wage based on the annual salary and average weekly work hours
const calculateHourlyWage = function(salary, hoursPerWeek) {
    //Dividing the salary by the total work hours in a year (52 weeks)
    const hourlyWage = salary / (hoursPerWeek * 52);

    //Hourly wage is logged to the console to two decimal places. 
    console.log(`Hourly wage: $${hourlyWage.toFixed(2)}`);
};

//Test cases - Values can be changed
calculateHourlyWage(52000, 40); //Expected output: $25.00
calculateHourlyWage(75000, 35); //Expected output: $41.21

//Task 3 - Customer Loyalty Discount

//Arrow function to calculate discount based on loyalty years
const calculateLoyaltyDiscount = (amount, years) => {
    //Declaring the discountRate variable
    let discountRate;

    //15% discount for 5 or more years
    if (years >= 5) discountRate = 0.15;

    //10% discount for 3 or more years
    else if (years >= 3) discountRate = 0.1;

    //5% discount for less than 3 years
    else discountRate = 0.05;

    //Calculating the discounted price
    const discountedPrice = amount * (1 - discountRate);
    
    //Discounted price is logged to the console to two decimal places
    console.log(`Discounted price: $${discountedPrice.toFixed(2)}`);
};

//Test cases - Values can be changed
calculateLoyaltyDiscount(100, 6); //Expected output: $85.00
calculateLoyaltyDiscount(200, 2); //Expected output: $190.00