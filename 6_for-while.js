// for(let i = 0; i < 10; i++){
//     console.log(i);
// };

// let counter = 0;
// while(counter < 10){
//     console.log(counter);
//     counter++;
// };
let fruits = ["plantain", "papaya", "avocado"];
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// };

//for of and for in. For of works like "for each".
for(let fruit of fruits){
    console.log(fruit);
};

let user = {
    name: "John",
    lastName: "Doe",
    gender: "Neutral",
    age: null
};
for(let key in user){
    console.log(`${key}: ${user[key]}`); //in a "for in" the key refers to the parameter inside the object, key: value
}