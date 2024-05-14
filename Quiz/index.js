#! /usr/bin/env node
import inquirer from "inquirer";
let result = 0;
const questions = [
    {
        name: "ans1",
        type: "list",
        message: "Which of the following is a feature of TypeScript?",
        choices: ["Dynamic typing", "Static typing", "No typing", "Duck typing"],
        correctAnswer: "Static typing",
    },
    {
        name: "ans2",
        type: "list",
        message: "Which keyword is used to define an interface in TypeScript?",
        choices: ["class", "interface", "type", "implements"],
        correctAnswer: "interface",
    },
    {
        name: "ans3",
        type: "list",
        message: "What is the extension of a TypeScript file?",
        choices: [".js", ".ts", ".jsx", ".tsx"],
        correctAnswer: ".ts",
    },
    {
        name: "ans4",
        type: "list",
        message: "Which command is used to compile a TypeScript file?",
        choices: ["tsc", "tsc compile", "ts compile", "tsbuild"],
        correctAnswer: "tsc",
    },
    {
        name: "ans5",
        type: "list",
        message: "How do you define a variable with a number type in TypeScript?",
        choices: [
            "let num: number;",
            "var num: Number;",
            "const num: numeric;",
            "let num = number;",
        ],
        correctAnswer: "let num: number;",
    },
    {
        name: "ans6",
        type: "list",
        message: "Which of the following is not a valid TypeScript type?",
        choices: ["string", "number", "boolean", "tuple"],
        correctAnswer: "tuple",
    },
    {
        name: "ans7",
        type: "list",
        message: "What is used to define a TypeScript class?",
        choices: ["class", "function", "type", "interface"],
        correctAnswer: "class",
    },
    {
        name: "ans8",
        type: "list",
        message: "How do you explicitly specify the type of a variable in TypeScript?",
        choices: [
            "let num = 5",
            "let num: number",
            "let num = number",
            "let num := number",
        ],
        correctAnswer: "let num: number",
    },
    {
        name: "ans9",
        type: "list",
        message: "Which of the following can be used to handle asynchronous operations in TypeScript?",
        choices: ["Promise", "Observable", "async/await", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        name: "ans10",
        type: "list",
        message: "Which symbol is used for optional chaining in TypeScript?",
        choices: ["?", ":", "??", "?.", "=>"],
        correctAnswer: "?.",
    },
];
console.log("Choose the correct answer");
const studentAns = await inquirer.prompt(questions);
questions.forEach((question) => {
    const userAnswer = studentAns[question.name];
    if (userAnswer === question.correctAnswer) {
        result++;
    }
});
console.log(`\nQuiz completed! You got ${result} out of ${questions.length} questions correct.`);
