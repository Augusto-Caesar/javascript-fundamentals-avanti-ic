const greetings = "Hello World!"; //const variables are final
let name = "Augusto"; //let variables can be overwritten
//variables are case sensitive
let age = 27; 
console.log(`My name is ${name} and i'm ${age} years old. ${greetings}`) //template strings are great
let value1 = 2.10;
let value2 = 3.20;
console.log(`The sum is ${value1 + value2}`);//simple math operations can be done inside a log
let fruits = ["apple", "kiwi", "melon"]; //array data types can be mixed, but it becomes an object
console.log(fruits[1]);
const user ={
    name: "Augusto Cesar",
    age: 27,
    favoriteLanguage: "Java"
};//object declaration, const variables are final
console.log(user.favoriteLanguage);//objects are accessed by depth, in which each "." represents a layer
