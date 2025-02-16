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