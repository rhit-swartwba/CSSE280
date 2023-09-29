//1

for(let i = 2; i <= 10; i+=2)
{
    console.log(i);
}

console.log();

//2

for(let i = 5; i > 0; i--)
{
    console.log(i);
}

console.log();

//3

const numbers = [1,2,3,4,5];
let sum = 0;
for(const num of numbers)
{
    sum += num;
}

console.log(sum);

console.log();

//4

const student = {name: 'John', age: 20, grade: 'A'};

for(const key in student)
{
    console.log(`${key}: ${student[key]}`);
}

console.log();

//5

const book = {title: "Harry Potter", author: "JK Rowling", year: 1997};

for(const info in book)
{
    console.log(`${info}: ${book[info]}`);
}

console.log();

//6

const colors = ["red", "green", "blue", "yellow"];
for(const color of colors)
{
    console.log(color);
}

console.log();

//7

//numbers already assigned and still the same as above
sum = 0;
for(const num of numbers)
{
    sum += num;
}

console.log(sum);

console.log();

//8

const temperatures = [32,68,75,82,56];
temperatures.forEach(convertToCel);

function convertToCel(faren) {
    console.log((faren-32)* (5/9));
}

console.log();

//9
const cities = ["New York", "Los Angeles", "Chicago", "Houston"];
const populations = {"New York": 8398748, "Los Angeles": 3990456, "Chicago": 2705994, "Houston": 2320268}
cities.forEach(getPopulation);

function getPopulation(city) {
    console.log(populations[city]);
}

console.log();

//10
print = "";
for(let k = 0; k < 5; k++)
{
    for(let i = 0; i <= k; i++)
    {
        print += "*";
    }
    print += "\n";
}

console.log(print);