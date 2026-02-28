let val1 = 5;
let val2 = "5";
let val3 = 2;
let val4 = 5;

/*Comparison Operators and their meaning
Equals to ==
Strictly equal to ===
Different than !=
Strictly different than !==
Greater than >
Smaller than <
Greater than or equal to >=
Smaller than or equal to <=

LOGIC Operators:
AND &&
OR ||
NEGATION !

*/
//comparison always returns a boolean True or False
console.log(val1 == val2); //false positive, both are 5, but one is an int and the other is a string, 
// JS parses the string and returns only the number, ignoring the data type.
console.log(val1 === val2); // strictly equals compares the data type as well
console.log(val1 > val3 && val1 === val4);
console.log(val2 === val1 || val1 == val2);
console.log(!(val1 === val2));