var readlineSync = require('readline-sync');


const calcInterface = readlineSync.createInterface({
    input: Process.stdin,
    output: process.stdout,
    prompt: ""
});

const validOperators = [
    "*",
    "-",
    "+",
    "/",
];

calcInterface.question("Enter the first number: ", (firstInput) => {
    const firstNumber = Number(firstInput);
    if(isNaN(firstNumber)){
        console.log("invalid Input")
        return calcInterface.close();
    }

    calcInterface.question("enter the operator: ", (operatorInput) => {
        if(!validOperators.includes(operatorInput)){
            console.log("invalid operator provided");
            return calcInterface.close();
        }
        calcInterface.question("Enter the second number: ", (secondInput) => {
            const secondNumber = Number(secondInput);
            if(isNaN(secondNumber)){
            console.log("invalid Input")
             return calcInterface.close();
    }
        const result = calculatorLogic(firstNumber, operatorInput, secondNumber);

        console.log('your result: ${result}');
        calcInterface.close();
        });
    });
});
function calculatorLogic(firstNumber, operator, secondNumber) {
    if(operator === "+") return firstNumber + secondNumber; 
    else if (operator === "-") return firstNumber - secondNumber
    else if (operator === "*") return firstNumber * secondNumber
    else if (operator === "/") return firstNumber / secondNumber
}
