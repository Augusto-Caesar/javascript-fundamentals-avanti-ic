const values = [2, 3, 6, 9];

const doubleValues = values.map(value => value * 2);//the variable value could be called anything, "n" would have the same effect.

/* The method "Map" takes the values from an existing array, transforms those values according to the params
and stores into another array. It doesn't alter the original array and results in the same array size as the original. */

console.log(doubleValues);
const users = [
    {name:"William", age: 19},
    {name:"Michael", age: 29},
    {name:"Jonah", age: 39}
];
const userNames = users.map(users => users.name); //for this one, the variable has to be the name of the array, in order to access the depth.
//in this case the method is literally "mapping" only the property "name" from the array of objects.
console.log(userNames);


const oddNumbers = values.filter(num => num % 2 != 0);
console.log(oddNumbers);

//the method Filter will... Filter an array based on the conditions you specify for it.
//in this case it's filtering only odd numbers from an array, below it filters only the adults from the 
//users array

const adultUser = users.filter(user => user.age > 17);
console.log(adultUser);

