#! /usr/bin/env node

import inquirer from "inquirer";
const calculator = await inquirer.prompt([
    {message : "Enter First no: ",
    type: "number",
    name: "number1"},

    {message : "Enter second no: ",
    type: "number",
    name: "number2"},

    {message : "Enter the operation you want to perfrom: ",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division","Module"]},
]);
if (calculator.operator === "Addition"){
    console.log(`${calculator.number1} + ${calculator.number2} = ${calculator.number1+calculator.number2}`);
}
else if (calculator.operator === "Subtraction"){
    console.log(`${calculator.number1} - ${calculator.number2} = ${calculator.number1-calculator.number2}`);
}
else if (calculator.operator === "Multiplication"){
    console.log(`${calculator.number1} * ${calculator.number2} = ${calculator.number1*calculator.number2}`);
}
else if (calculator.operator === "Division"){
    console.log(`${calculator.number1} / ${calculator.number2} = ${calculator.number1/calculator.number2}`);
}
else if (calculator.operator === "Module"){
    console.log(`${calculator.number1} % ${calculator.number2} = ${calculator.number1%calculator.number2}`);
}
else{
    console.log(`Invalid Input`);
}