import inquirer from "inquirer";
let answer = await inquirer.prompt([{
    message: "Enter your weight in Kg. ",
    name: "weight",
    type: "number"
},
{
    message: "Enter Your Height in Meters:",
    name: "height",
    type: "number"
},
]);

let bmi =(answer.weight / (answer.height * answer.height)).toFixed(2)

console.log(`Your BMI is ${bmi}.`)