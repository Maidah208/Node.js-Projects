#! /usr/bin/env node
import inquirer from "inquirer";
import { Student } from "./student.js";
const name = await inquirer.prompt([
    {
        name: "answer",
        type: "input",
        message: "What is your name?"
    }
]);
const ask = await inquirer.prompt([
    {
        name: "choice",
        type: "number",
        message: "Type '1' if you like to talk to yourself or Type '2' if you like to talk to other person. ",
        validate: function (value) {
            // Check if the input can be parsed as an integer
            if (Number.isInteger(Number(value))) {
                return true;
            }
            else {
                return "Please enter a valid integer.";
            }
        },
    },
]);
const myStudent = new Student();
myStudent.askQuestion(ask.choice);
myStudent.Name = name.answer;
console.log(`Your name is ${myStudent.Name} and you are ${myStudent.getPersonality()}`);
