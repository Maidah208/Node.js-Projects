#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

function points(point: number) {
  if (point === 1) {
    console.log(chalk.yellow(`\nYou got ${point} point.`));
  } else {
    console.log(chalk.yellow(`\nYou got ${point} points.`));
  }
}

console.log(chalk.magentaBright(`\n\t\t# Welcome to the Quiz #`))
console.log(`\n--------------------------------------------------------------------\n`)
let answer = 0;

const question1 = await inquirer.prompt([
  {
    message: "Which file extension is commonly used for TypeScript files? ",
    type: "list",
    name: "answer",
    choices: [".js", ".ts", ".txt", ".html"],
  },
]);
if (question1.answer === ".ts") {
  console.log(chalk.green("\nCorrect"));
  answer++;
} else {
  console.log(chalk.red("\nIncorrect"));
}

console.log(`\n--------------------------------------------------------------------\n`)
const question2 = await inquirer.prompt([
  {
    message: `What does the "tsc" command do in TypeScript?`,
    type: "list",
    name: "answer",
    choices: [
      "Transpiles TypeScript code to JavaScript",
      "Validates TypeScript syntax without generating output",
      "Installs TypeScript globally on the system",
    ],
  },
]);
if (question2.answer === "Transpiles TypeScript code to JavaScript") {
  console.log(chalk.green("\nCorrect"));
  answer++;
} else {
  console.log(chalk.red("\nIncorrect"));
}

console.log(`\n--------------------------------------------------------------------\n`)
const question3 = await inquirer.prompt([
  {
    message:
      "Which of the following best describes TypeScript's relationship with JavaScript?",
    type: "list",
    name: "answer",
    choices: ["Separate", "Subset", "Superset", "Alternative"],
  },
]);
if (question3.answer === "Superset") {
  console.log(chalk.green("\nCorrect"));
  answer++;
} else {
  console.log(chalk.red("\nIncorrect"));
}

console.log(`\n--------------------------------------------------------------------\n`)
const question4 = await inquirer.prompt([
  {
    message: "What is TypeScript?",
    type: "list",
    name: "answer",
    choices: ["Scripting", "Superset", "Markup", "Database"],
  },
]);
if (question4.answer === "Superset") {
  console.log(chalk.green("\nCorrect"));
  answer++;
} else {
  console.log(chalk.red("\nIncorrect"));
}

console.log(`\n--------------------------------------------------------------------\n`)
const question5 = await inquirer.prompt([
  {
    message: "Which TypeScript feature allows for checking the type of a variable at runtime?",
    type: "list",
    name: "answer",
    choices: ["Type guard", "Runtime type", "Dynamic type", "Typeof"],
  },
]);
if (question5.answer === "Type guard") {  
  console.log(chalk.green("\nCorrect"));
  answer++;
} else {
  console.log(chalk.red("\nIncorrect"));
}

points(answer);
