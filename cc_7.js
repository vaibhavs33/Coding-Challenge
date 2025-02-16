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