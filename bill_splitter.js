// Coding Challenge: Bill Splitter Application

//Task 1 calculating the tip based on bill size
// 
let Bill = 100
let tip;
if (Bill 50 <= && <= 300) { 
    let tip = Bill*0.15;}
else if ( Bill  > 300 ) { 
    let tip = Bill*0.2; }
console.log("tip", tip);

// Task  2 Output Details
let totalbill = tip + Bill
console.log("tip + Bill", totalbill);
console.log (`Thank you for your order, your bill was $${Bill}, the tip was $${tip} and so, the total value is $${totalbill} `);

// Task 3 Create a function
// Function Declaration - Calculate Tip 
function calculatetip( Bill, tip) {
    return tip; 
} 

let Bill = 100
console.log(`tip when bill is $100: $${calculatetip(100, 15)}`);

// Task 4 utilize arrays 
// array of Bills
const Bill = [275, 40, 30]
// calculate the bill
const tips = Bill.map(bill => tip(bill));
const totalbill = Bill.map(bill => totalbill(bill));
console.log("tip", tip);
console.log("totalbill", totalbill);


const Bill = [125, 555, 44]
const tips = Bill.map(bill => tip(bill));
const totalbill = Bill.map(bill => totalbill(bill));
console.log("tip:", tip);
console.log("totalbill:", totalbill);



