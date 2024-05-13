#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {message : "Enter First Number", type : "number" , name : "firstNumber"},
    {message : "Enter Second Number", type : "number" , name : "secondNumber"},
    {
        message : "Select one of the operator to perform operation",
        type : "list",
        name : "operator",
        choices : ["Addition", "Subtraction", "Multiplication", "Division" , "Modulus"],
    },
]);

//conditional statement
if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if(answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
} else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
} else if(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Modulus") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}