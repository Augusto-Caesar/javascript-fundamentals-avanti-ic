const values = [2, 3, 6, 9];

const users = [
    {name:"William", age: 19},
    {name:"Michael", age: 29},
    {name:"Jonah", age: 39}
];

const products = [
    {name: "TV", price: 2000},
    {name: "Smartphone", price: 2500},
    {name: "E-Bike", price: 8999}
];

const doubleValues = values.map(value => value * 2);//the variable value could be called anything, "n" would have the same effect.
console.log(doubleValues);
/* The method "Map" takes the values from an existing array, transforms those values according to the params
and stores into another array. It doesn't alter the original array and results in the same array size as the original. */

const userNames = users.map(users => users.name); //for this one, the variable has to be the name of the array, in order to access the depth.
//in this case the method is literally "mapping" only the property "name" from the array of objects.
console.log(userNames);

const oddNumbers = values.filter(num => num % 2 != 0);
console.log(oddNumbers);
//the method Filter will... Filter an array based on the conditions you specify for it.
//in this case it's filtering only odd numbers from an array, below it filters only the adults from the users array
//this method also does not alters the original array, however the resulting array will likely be smaller than the original
//it returns a boolean for your condition, if true it will store the value inside its own array
//if false it shall not store the value
const adultUser = users.filter(user => user.age > 17);
console.log(adultUser)

const valueSum = values.reduce((acc, val) => acc + val, 0);
//this method creates a function with 2 params, acc = accumulator, val is the value being accumulated and taken
//from the array. It is adding the value to the accumulator, and the param after the comma is the initial value
//given to the accumulator. After the operation is complete, it shall return the sum of all values inside the array.
console.log(valueSum);

const productSum = products.reduce((acc, val) => acc + val.price, 0);//the only difference when working with objects
//is to pay attention to the depth of the property
console.log(productSum);

