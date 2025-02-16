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

//Task 4 - Product Shipping Cost Calculation

//Function that calculates shipping cost based on the package weight, destination, and whether expedited shipping is selected
function calculateShippingCost(weight, location, expedited = false) {
    //Initialize the base cost
    let cost = 0;

    if (location === 'USA') {
        //Base fee of $5 plus $0.5 per pound
        cost = 5 + (0.5 * weight);
    } else if (location === 'Canada') {
        //Base fee of $10 plus $0.7 per pound
        cost = 10 + (0.7 * weight);
    }
    //Additional $10 fee for expedited shipping
    if (expedited) cost += 10;

    //Shipping cost is logged to the console to 2 decimal places
    console.log(`Shipping cost: $${cost.toFixed(2)}`);
};

//Test cases - Values can be changed
calculateShippingCost(10, 'USA', true); //Expected output: $20.00
calculateShippingCost(5, 'Canada', false); //Expected output: $13.50

//Task 5 - Business Loan Interest Calculation

//Function that calculates the total interest on a loan based on the principal, annual interest rate, and loan duration
function calculateLoanInterest(principal, rate, years) {
    //Interest formula
    const interest = principal * rate * years;

    //Total interest amount is logged to the console to 2 decimal places
    console.log(`Total interest: $${interest.toFixed(2)}`);
};

//Test cases - Values can be changed
calculateLoanInterest(1000, 0.05, 3); //Expected output: $150.00
calculateLoanInterest(5000, 0.07, 5); //Expected output: $1750.00

//Task 6 - Filtering High-Value Transactions

//Function filters an array of transactions, returning only those above a certain amount

//Array of transactions
let transactions = [500, 1200, 3000, 800, 2200];

function filterHighValueTransactions(transactions, filterFunction) {
    //Applying filter function to transactions
    const result = transactions.filter(filterFunction);

    //Filtered transactions logged to the console
    console.log("High-value transactions:", result);
};

filterHighValueTransactions(transactions, amount => amount > 1000); //Expected output: [1200, 3000, 2200]

//Task 7 - Budget Tracker

//Closure function that creates a budget tracker which maintains a running balance after deducting expenses
function createBudgetTracker() {
    //Initalize the balance
    let balance = 0;
    return function(expense) {
        //Deducting expense from the balance
        balance -= expense;

        //Updated negative balance is logged to the console
        console.log(`Current balance: -$${Math.abs(balance)}`);
    };
}

//Creating a budget tracker instance
let budget = createBudgetTracker();

//Test cases - Values can be changed
budget(300); //Expected output: -$300
budget(200); //Expected output: -$500

//Task 8 - Business Growth Projection

//Recursive function that projects revenue growth by 5% annually until a maximum of 10 years is reached
function calculateGrowth(years, revenue) {
    //Stopping recursion after 10 years and returning the projected revenue to two decimal places
    if (years >= 10) return `Projected revenue: $${revenue.toFixed(2)}`;

    //Incresing the revenue by 5% and recursing for the next year
    return calculateGrowth(years + 1, revenue * 1.05);
};

//Test cases - Values can be changed
console.log(calculateGrowth(8, 1000)); //Expected output - Projected revenue: $1102.50
console.log(calculateGrowth(5, 5000)); //Expected output - Projected revenue: $6381.41