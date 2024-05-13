#! /usr/bin/env node
import inquirer from "inquirer";
let myPin = 1234;
let myBalance = 10000;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number",
    },
]);
if (pinAns.pin === myPin) {
    console.log("Correct Pin Code!");
    let operation = await inquirer.prompt([
        {
            name: "action",
            message: "Select an action.",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Withdraw"],
        },
    ]);
    console.log(operation);
    if (operation.action == "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter Your Ammount",
            },
        ]);
        if (amountAns.amount > 0 && amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your Remaining Balance Is ${myBalance}`);
        }
        else {
            console.log("Enter Valid Ammount!");
        }
    }
    else if (operation.action == "Check Balance") {
        console.log(`Your Balance Is ${myBalance}`);
    }
    else if (operation.action == "Fast Withdraw") {
        console.log(operation);
        let fastWithdraw = await inquirer.prompt([
            {
                name: "fastAmmount",
                type: "list",
                message: "Select Amount?",
                choices: ["500", "1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000", "10000"]
            }
        ]);
        myBalance -= fastWithdraw.fastAmmount;
        console.log(`Your Remaining Balance Is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Code!");
}
