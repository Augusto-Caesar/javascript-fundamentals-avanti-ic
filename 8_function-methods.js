console.log("The sum of 5 + 5 is...");
const result = () => console.log(5 + 5);
//setTimeout(result, 5000);
//the setTimeout method will execute a function after an allotted time frame has passed, it is measured in milliseconds
//or ms, in which 1000ms = 1 second
//setInterval(result, 2000);
//this method works similarly to setTimeout, however it operates in a loop, every 2 seconds it shall print the result
//unendingly. In order to set a boundary for the method, it needs a bit of logic
let counter = 0;
let limit = 5;
const intervalID = setInterval(() => {
    counter++;
    result();
    if(counter == limit){
        clearInterval(intervalID);
    }
}, 2000)
//for this the setInterval method HAS to be stored inside a variable in order to control it
//create an arrow function as the method's first param in order to execute the logic, then allot the time frame for the interval