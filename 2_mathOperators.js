// const value1 = 5;
// const value2 = 2;
// const value3 = 3;
// const sum = (value1 + value2 + value3);

// console.log(`The sum of all three values is equal to ${sum}.`);
// let val1 = 5;
// let val2 = 4;
// let val3 = 5;
// let operation = val1 + val2 - val3; //operand priority will drastically change the result
// console.log(`The result of math operations between the three values is: ${operation}.`);

// let val1 = 5;
// let val2 = 5;
// let val3 = 2;
// let operation = val1 + val2 / val3; //in this case val2 is being divided by val3 before adding val1.
// console.log(`The result of math operations between the three values is: ${operation}.`);

let val1 = 5;
let val2 = 5;
let val3 = 2;
let operation = val1 + val2 * val3; //in this case val2 is being multiplied by val3 before adding val1.
console.log(`The result of math operations between the three values is: ${operation}.`);

//In order to isolate several math operands without messing it up, always use (operation)