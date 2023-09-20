//Honestly, most of these website ones were more focused on concepts than hard code
//It is similar to Java as well, so I did not take extra notes the concepts I already know 

//Javascript will treat this as a string

let x = 16 + "Volvo";
console.log(typeof x);
console.log(x);

//Javascript evaluates from left to right so

x = 16 + 4 + "Volvo";
console.log(typeof x);
console.log(x);

//VS Javascript evaluating
x = "Volvo" + 16 + 4;
console.log(typeof x);
console.log(x);

//Javascript types are dynamic
x = 5;       // Now x is a Number
console.log(typeof x);
console.log(x);

x = "John";  // Now x is a String
console.log(typeof x);
console.log(x);

//Numbers can have or can not have decimals
// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34;

//Object 
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
