#! /usr/bin/env node
import inquirer from "inquirer"; //importing inquirer &
import chalk from "chalk"; //chalk module
console.log(chalk.green(`\tWelcome`));
let myPin = 3569; //intializing the code &
let currentBalance = 100000; // current balance
// asking user to enter pin
let pin = await inquirer.prompt([{
        name: "pinCode",
        type: "number",
        message: chalk.blue("Enter your pin:")
    }]);
// if he pin is correct then these lines of code will run
if (pin.pinCode === myPin) {
    // asking user what operation he want to perform.
    let options = await inquirer.prompt([{
            message: chalk.blue("Please select the Operation."),
            name: "option",
            type: "list",
            choices: ["Account Information", "Balance Check", "Cash Withdraw", "Cash Deposit", "Fast Cash", "Transaction History", "Transfer Funds"]
        }]);
    // when account information is selected.
    if (options.option === "Account Information") {
        // making a function that print person's account information.
        function storeAndPrintPersonInfo(personInfo) {
            // looping through each property of the object
            for (let key in personInfo) {
                console.log(`${key}: ${personInfo[key]}`);
            }
        }
        // calling the function and giving it the information.
        storeAndPrintPersonInfo({
            name: chalk.magenta("Juliet"),
            accountNumber: chalk.magenta(256984356942312),
            accountBalance: chalk.magenta(currentBalance),
            cardType: chalk.magenta("Debit Card"),
            accountType: chalk.magenta("Savings"),
            recentTransaction: chalk.magenta("Cash Withdraw"),
            lastDeposit: chalk.magenta("2022-03-25"),
            lastWithdrawal: chalk.magenta("2022-03-27")
        });
    }
    // when check balance is selected
    else if (options.option === "Balance Check") {
        console.log(chalk.yellow(`Your current Balance is ${currentBalance}`));
    }
    // when cash withdraw is seleted
    else if (options.option === "Cash Withdraw") {
        // asking user the amount he want to withdraw
        let withdraw = await inquirer.prompt([{
                name: "cash",
                type: "number",
                message: "Enter the amount you want to withdraw:",
            }]);
        // if the ammount he want to withdraw is less than or equal to his current balance then this,
        if (withdraw.cash <= currentBalance) {
            console.log(chalk.yellow(`You withdraw ${withdraw.cash} ammount of Ruppee.`));
            console.log(chalk.yellow(`Your remaining balance is ${currentBalance - withdraw.cash}.`));
            currentBalance -= withdraw.cash;
        }
        // if the withdraw amount is greater than current balance then this will happen.
        else {
            console.log(chalk.red(`You don't have enough balance.`));
        }
    }
    // if cash deposit is selected
    else if (options.option === "Cash Deposit") {
        // asking user the amount he want to deposit.
        let deposit = await inquirer.prompt([{
                name: "cash",
                type: "number",
                message: "Enter the amount you want to Deposit:",
            }]);
        console.log(chalk.yellow(`You Deposited ${deposit.cash} ammount of Ruppee.`));
        console.log(chalk.yellow(`Your balance is ${currentBalance + deposit.cash}.`));
        currentBalance += deposit.cash;
    }
    // if fast cash is selected.
    else if (options.option === "Fast Cash") {
        // asking the amount he want to withdraw by giving options of fast cash.
        let fastCashWithdraw = await inquirer.prompt([{
                message: "Enter the amount you want to withdraw",
                type: "list",
                name: "cash",
                choices: [5000, 10000, 15000, 20000]
            }]);
        // conditional statements for the choices of fast cash.
        if (fastCashWithdraw.cash === 5000) {
            if (fastCashWithdraw.cash <= currentBalance) {
                console.log(chalk.yellow(`You withdraw ${fastCashWithdraw.cash} ammount of Ruppee.`));
                console.log(chalk.yellow(`Your remaining balance is ${currentBalance - fastCashWithdraw.cash}.`));
                currentBalance -= fastCashWithdraw.cash;
            }
            else {
                console.log(chalk.red(`You don't have enough balance.`));
            }
        }
        else if (fastCashWithdraw.cash === 10000) {
            if (fastCashWithdraw.cash <= currentBalance) {
                console.log(chalk.yellow(`You withdraw ${fastCashWithdraw.cash} ammount of Ruppee.`));
                console.log(chalk.yellow(`Your remaining balance is ${currentBalance - fastCashWithdraw.cash}.`));
                currentBalance -= fastCashWithdraw.cash;
            }
            else {
                console.log(chalk.red(`You don't have enough balance.`));
            }
        }
        else if (fastCashWithdraw.cash === 15000) {
            if (fastCashWithdraw.cash <= currentBalance) {
                console.log(chalk.yellow(`You withdraw ${fastCashWithdraw.cash} ammount of Ruppee.`));
                console.log(chalk.yellow(`Your remaining balance is ${currentBalance - fastCashWithdraw.cash}.`));
                currentBalance -= fastCashWithdraw.cash;
            }
            else {
                console.log(chalk.red(`You don't have enough balance.`));
            }
        }
        else if (fastCashWithdraw.cash === 20000) {
            if (fastCashWithdraw.cash <= currentBalance) {
                console.log(chalk.yellow(`You withdraw ${fastCashWithdraw.cash} ammount of Ruppee.`));
                console.log(chalk.yellow(`Your remaining balance is ${currentBalance - fastCashWithdraw.cash}.`));
                currentBalance -= fastCashWithdraw.cash;
            }
            else {
                console.log(chalk.red(`You don't have enough balance.`));
            }
        }
    }
    // if transaction history is selected.
    else if (options.option === "Transaction History") {
        // making a function that store the transaction history using the transactionHistory interface and then print the info.
        function storeAndPrintTransactionHistory(transactionHistory) {
            // looping through each value of object.
            for (let key in transactionHistory) {
                console.log(`${key}: ${transactionHistory[key]}`);
            }
        }
        // calling the function to store and print transaction history.
        storeAndPrintTransactionHistory({
            withdraw: chalk.yellow("22-03-2024"),
            withdrawAmount: chalk.yellow(4000),
            deposit: chalk.yellow("24-04-2024"),
            depositAmount: chalk.yellow(9000)
        });
    }
    // if funds transfer is selected.
    else if (options.option === "Transfer Funds") {
        // asking from the user the amount he want to transfer.
        let funds = await inquirer.prompt([{
                message: "Enter the Amount you want to transfer:",
                name: "fund",
                type: "number"
            },
            // asking the account on which the amount too be transferred.
            {
                message: "Enter the account number you want the fund to be transfered:",
                name: "accnumber",
                type: "number"
            }
        ]);
        // conditional statements to check balance.
        if (funds.fund < currentBalance) {
            console.log(chalk.yellow(`${funds.fund} amount of ruppee transfered to ${funds.accnumber}.`));
            console.log(chalk.yellow(`Your remaining Balance is ${currentBalance - funds.fund}.`));
            currentBalance -= funds.fund;
        }
        else {
            console.log(chalk.red(`You don't have enough balance.`));
        }
    }
} // if pin is not correct then this will print.
else {
    console.log(chalk.red(`INCORRECT PIN`));
}
