//spread syntax allows for multiple array operations
//such as copying the values from one array to a new array
const numbers = [1, 2, 3, 4];
const copiedNumbers = [...numbers]//those dots are the spread operator.
console.log(copiedNumbers);
//it can be used to concatenate multiple arrays into one
const concatenatedArrays = [...numbers, ...copiedNumbers];
console.log(concatenatedArrays);
//you can add elements along with the spread syntax
const addArray = [0, ...numbers, 5];
console.log(addArray);
//you can use it to manipulate objects, copying an object is exactly the same as copying an array.

const users = {
    id1: {name:"William", age: 19},
    id2: {name:"Michael", age: 29},
    id3: {name:"Jonah", age: 39}
};
const updatedUsers = {...users, id1:{...users.id1, age: 20, town: "Winterhold"}};//this will update the age to the user according to its ID
//and also add the new property "town" with the value "winterhold"
console.log(updatedUsers);
