#! /usr/bin/env node
import inquirer from "inquirer";
const compGuessedNum = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNum",
        type: "number",
        message: "Kindly Guess a Number between 1-10"
    }]);
if (answer.userGuessedNum === compGuessedNum) {
    console.log(`Congratulations! You Guess Correct Number. \n${compGuessedNum}`);
}
else {
    console.log(`Oops! You Guess Wrong Number.\nCorrect Number is ${compGuessedNum}`);
}
