#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.19,
    INR: 74.57,
    PKR: 280,
    JPY: 152.94,
    SAR: 3.7509,
    AUD: 1.5366
};
let userAns = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Amount",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "JPY", "SAR", "AUD"]
    },
    {
        name: "to",
        message: "Enter To Amount",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "JPY", "SAR", "AUD"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = currency[userAns.from];
let toAmount = currency[userAns.to];
let amount = userAns.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
