#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your todos?"
        },
        {
            name: "remove",
            type: "confirm",
            message: "Do you want to remove a last task?",
            default: "true"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more tasks?",
            default: "true"
        }
    ]);
    if (addTask.todo !== " ") {
        todos.push(addTask.todo);
        condition = addTask.addMore;
    }
    else {
        console.log("could'nt add empty list");
    }
    if (addTask.remove && todos.length > 0) {
        todos.pop();
        console.log("Last task removed.");
    }
    console.log(todos);
}
