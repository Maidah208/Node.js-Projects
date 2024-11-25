#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt(
    [
        {
            name: "sentence",
            type: "input",
            message: chalk.blue("Enter your sentence:"),
        },
    ]
);

let word = answer.sentence.trim().split(/\s+/);
// .trim() removes white spaces from the string.
// .split(split(/\s+/)) split the sentence into an array.
// .length count the element of the array(string).
let wordCount = word.length;

console.log(chalk.greenBright(`Your word count is ${wordCount}`)) 


