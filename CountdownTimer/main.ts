#! /usr/bin/env node
import inquirer from "inquirer";

// Prompt the user for the number of minutes and seconds
const response = await inquirer.prompt([
  {
    name: "minutes",
    type: "number",
    message: "Please enter the amount of minutes: ",
    validate: (input) => {
      if (isNaN(input)) {
        return `Please input a valid number.`;
      } else if (input < 0) {
        return `Minutes must be non-negative.`;
      } else {
        return true;
      }
    }
  },
  {
    name: "seconds",
    type: "number",
    message: "Please enter the amount of seconds: ",
    validate: (input) => {
      if (isNaN(input)) {
        return `Please input a valid number.`;
      } else if (input < 0 || input >= 60) {
        return `Seconds must be between 0 and 59.`;
      } else {
        return true;
      }
    }
  },
]);

// Calculate the total time in seconds
let totalSeconds = response.minutes * 60 + response.seconds;

function startTimer(value: number) {
  const initialTime = new Date().getTime() + value * 1000; // Convert seconds to milliseconds

  const timer = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeDifference = Math.max((initialTime - currentTime) / 1000, 0); // Remaining time in seconds

    if (timeDifference <= 0) {
      clearInterval(timer); // Stop a timer that was previously started with setInterval()
      console.log(`Timer has been Ended.`);
      process.exit();
    }

    const minutes = Math.floor(timeDifference / 60); // Calculate remaining minutes
    const seconds = Math.floor(timeDifference % 60); // Calculate remaining seconds
    console.clear(); // Clears the screen 
    console.log(`Time Remaining: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
  }, 1000);
}

startTimer(totalSeconds);
