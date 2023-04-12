const readline = require("readline-sync")

const num1 = readline.question("Please enter your first number: ");
const num2 = readline.question("Please enter your second number: ");

const operations = ["add", "sub", "mul", "div"];
let userInput = readline.keyInSelect(operations, "Please enter the operation to perform: add, sub, mul, or div." );

function add(num1, num2) {
    console.log("The result is: " + (Number(num1) + Number(num2)))
}

function mul(num1, num2){
    return ("The result is:  " + (Number(num1) * Number(num2)))
}

function div(num1, num2){
    console.log("The result is: " + (Number(num1) / Number(num2)))
}

function sub(num1, num2){
    console.log("The result is: " + (Number(num1) - Number(num2)))
}

if(userInput === 0){
    add(num1, num2);
}   else if(userInput === 1){
    sub(num1, num2)
}   else if(userInput === 2){
    mul(num1, num2)
}   else {
    div(num1, num2)
}

// ubhfWIOUOFIO3iuGBRIbu3y2bvUIYILVUIRYfvgbUIY3BRiQ3QX HRILu g3ruiiG 3RI