//1

function multiply(x,y) {
    return x*y;
}

//2
function isEven(num) {
    return num%2 == 0;
}

//3

const difference = function subtract(a,b) {
    return a-b;
}

//4

const greeting = function(name) {
    return `Hello, ${name}!`;
}

//5

function calculate(x,y) {
    const val = function(x,y) {
        return (x+y)^2;
    }
    return val(x,y);
}

//6

function average(num1, num2, num3) {
    const val = function(num1, num2, num3)
    {
        return (num1+num2+num3)/3;
    }
    return val(num1, num2, num3);
}

//7

const mult = (x,y) => x*y;

//8

const getGreet = (nam) => `Hello, ${nam}!`;

//9

const squareVal = (x) => x*x;

//10

const isEvenValue = (numb) => {numb % 2 == 0};

//11

const maxVal = (numbers) => Math.max(...numbers);

//12

const addTwoNums = (a,b) => {a+b};


