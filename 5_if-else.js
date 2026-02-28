const finalGrade = 6;
const frequency = 5;

if(finalGrade >= 7 && frequency >= 6){
    console.log("Approved");
}else if (finalGrade < 7 && frequency >= 6){
    console.log("Recuperation");
}else{
    console.log("Failed");
}

/* The simpler way of writing if-else is through ternary operators, 
they are harder to read however, specially in big blocks of code */
let age = 17;
const statusAge = age >= 18 ? "Adult" : "Minor";
console.log(statusAge);
