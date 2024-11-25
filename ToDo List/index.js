#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let task = [];
let exit;
// initialize a variable to break the loop when the condition is true.
// use while loop to repeatedly ask the user about task list.
while (exit !== "Exit") {
    // asking the user what he want to do and giving huim choices.
    let choice = await inquirer.prompt([
        {
            message: "What would you like to do? ",
            type: "list",
            name: "chooseTask",
            choices: ["Add Task", "Delete Task", "View Task", "Exit"]
        },
    ]);
    // if he chooses add task then asking him What he want to add 
    if (choice.chooseTask === "Add Task") {
        let addTask = await inquirer.prompt([
            {
                message: "What do you want to add?",
                name: "add",
                type: "input"
            },
        ]);
        // adding the task to the list
        task.push(addTask.add);
        console.log(chalk.blue(`Task added succesfully.`));
    }
    //  if he choose to delete task. 
    else if (choice.chooseTask === "Delete Task") {
        // checking if the task list empty or not.
        // if task list is not empty,
        if (task.length > 0) {
            // asking what task he want to delete by showing him the list of task.
            let deleteTask = await inquirer.prompt([
                {
                    message: "Select the task you want to delete.",
                    type: "list",
                    name: "delete",
                    choices: task
                }
            ]);
            // deleting the task 
            let index = task.indexOf(deleteTask.delete);
            task.splice(index, 1);
            console.log(chalk.blue(`Task deleted successfully.`));
        }
        // if the task list is empty
        else {
            console.log(chalk.magenta(`Your task List is empty.`));
        }
    }
    // if user select view task
    else if (choice.chooseTask === "View Task") {
        // checking if the task list is empty or not.
        if (task.length > 0) {
            // if task list is not empty.
            console.log(task);
        }
        // if task list is empty
        else {
            console.log(chalk.magenta(`Your task list is empty.`));
        }
    }
    // if user select exit.
    else if (choice.chooseTask === "Exit") {
        // changing the variable so that the condition turns false and the loop terminates.
        exit = "Exit";
        console.log(chalk.blue(`Exited successfully!`));
    }
}
