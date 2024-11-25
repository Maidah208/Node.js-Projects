import inquirer from "inquirer";
const choices = ["Rock", "Paper", "Scissor"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];
let game = await inquirer.prompt([{
        message: "Enter your choice: ",
        choices: choices,
        type: "list",
        name: "user_choice",
    },
]);
console.log(`Computer's Choice: ${computerChoice}`);
if ((game.user_choice == "Rock" && computerChoice == "Scissor") ||
    (game.user_choice == "Scissor" && computerChoice == "Paper") ||
    (game.user_choice == "Paper" && computerChoice == "Rock")) {
    console.log(`You win!`);
}
else if (game.user_choice == computerChoice) {
    console.log(`Game tied.`);
}
else {
    console.log(`You Lose.`);
}
