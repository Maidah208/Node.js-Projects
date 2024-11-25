#! /usr/bin/env node
import inquirer from "inquirer";
let computerGuess = Math.floor((Math.random() * 10) + 1);
let numberOfGuess = 3;
while (numberOfGuess > 0) {
    let guess = await inquirer.prompt([
        {
            message: "Guesss any number betwenn 1 to 10:",
            type: "number",
            name: "userGuess",
        },
    ]);
    if (guess.userGuess === computerGuess) {
        console.log(`Congratulations! You Win.`);
        break;
    }
    else {
        console.log(`Wrong Guess. Try Again`);
        numberOfGuess--;
    }
}
if (numberOfGuess === 0) {
    console.log(`You ran out of guesses. The right guess was ${computerGuess}`);
}
