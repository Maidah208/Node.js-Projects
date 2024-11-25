#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let dishes = ["Pizza", "Burger", "Fries", "Drink" ]
let order = [];

let pizzaOrders = [];
let burgerOrders = [];
let friesOrders = [];
let drinkOrders = [];

let bill = 0;

let exit; 
while(exit != "Exit"){
    let order = await inquirer.prompt(
        [
            {
                name: "dish",
                type: "list",
                choices:  ["Pizza", "Burger", "Fries"],
                message: chalk.yellow("What would you like to order?")
            },
        ]
    );

    if (order.dish === "Pizza"){
        let pizzaOrder = {
            Item: "",
            Quantity: 0,
            Price: 0,
        }
        let sizes = ["Small", "Medium", "Large", "Extra Large"]
        let pricesOfPizza = {
            Small: 300,
            Medium: 500,
            Large: 700,
            ExtraLarge: 900
        }
        let pizza = await inquirer.prompt(
            [
                {
                    name: "flavour",
                    type: "list",
                    choices: ["Tikka", "Creamy Tikka", "Fajita", "Pepproni"],
                    message: chalk.yellow("What flavour do you want?")
                },
                {
                    name: "size",
                    type: "list",
                    choices: sizes,
                    message: chalk.yellow("Select your size:")
                },
                {
                    name: "quantity",
                    type: "number",
                    message: chalk.yellow("How many pizza do you want?")
                },

            ]
        );

        let price = 0;
        if (pizza.size === sizes[0]){
            pizzaOrder.Price = pricesOfPizza.Small * pizza.quantity
            pizzaOrder.Quantity = pizza.quantity
            pizzaOrder.Item = "Small Pizza"
        }
        else if (pizza.size === sizes[1]){
            pizzaOrder.Price = pricesOfPizza.Medium * pizza.quantity
            pizzaOrder.Quantity = pizza.quantity
            pizzaOrder.Item = "Medium Pizza"
        }
        else if (pizza.size === sizes[2]){
            pizzaOrder.Price = pricesOfPizza.Large * pizza.quantity
            pizzaOrder.Quantity = pizza.quantity
            pizzaOrder.Item = "Large Pizza"
        }
        else if (pizza.size === sizes[3]){
            pizzaOrder.Price = pricesOfPizza.ExtraLarge * pizza.quantity
            pizzaOrder.Quantity = pizza.quantity
            pizzaOrder.Item = "Extra Large Pizza"
        }
        pizzaOrders.push(pizzaOrder);
        bill += pizzaOrder.Price;
    }

    else if (order.dish === "Burger"){
        let burgerOrder = {
            Item: "",
            Quantity: 0,
            Price: 0,
        }
        let types = ["Chicken", "Beef", "Plain"]
        let pricesOfBurger = {
            chicken: 350,
            beef: 450,
            plain: 250
        }
        let price = 0;
        let burger = await inquirer.prompt(
            [
                {
                    name: "type",
                    type: "list",
                    choices: types,
                    message: chalk.yellow("What type of burger do you want?")
                },
                {
                    name: "quantity",
                    type: "number",
                    message: chalk.yellow("How many burgers do you want?")
                },
            ]
        );
        if (burger.type === types[0]){
            burgerOrder.Price =  pricesOfBurger.chicken * burger.quantity
            burgerOrder.Quantity = burger.quantity
            burgerOrder.Item = "Chicken Burger"
        }
        else if (burger.type === types[1]){
            burgerOrder.Price = pricesOfBurger.beef * burger.quantity
            burgerOrder.Quantity = burger.quantity
            burgerOrder.Item = "Beef Burger"
        }
        else if (burger.type === types[2]){
            burgerOrder.Price = pricesOfBurger.plain * burger.quantity
            burgerOrder.Quantity = burger.quantity
            burgerOrder.Item = "Plain Burger"
        }
        burgerOrders.push(burgerOrder)
        bill += burgerOrder.Price
    }

    else if (order.dish === "Fries"){
        let friesOrder = {
            Item: "",
            Price: 0,
            Quantity: 0
        }
        let pricesOfFries = {
            spicy: 150,
            plain: 100,
        }
        let price = 0;
        let fries = await inquirer.prompt(
            [
                {
                    name: "flavour",
                    type: "list",
                    choices: ["Plain", "Spicy"],
                    message: chalk.yellow("Select your flavour:")
                },
                {
                    name: "quantity",
                    type: "number",
                    message: chalk.yellow("How many box of fries do you want?")
                },
            ]
        )
        if (fries.flavour === "Plain"){
            price = pricesOfFries.plain * fries.quantity
            friesOrder.Item = "Plain Fries"
            friesOrder.Quantity = fries.quantity
            friesOrder.Price = pricesOfFries.plain
        }
        else if (fries.flavour === "Spicy"){
            price = pricesOfFries.spicy * fries.quantity
            friesOrder.Item = "Spicy Fries"
            friesOrder.Quantity = fries.quantity
            friesOrder.Price = pricesOfFries.spicy
        }
        friesOrders.push(friesOrder)
        bill += friesOrder.Price;
    }
    let addMore = await inquirer.prompt(
        [
            {
                name: "AddMore",
                type: "confirm",
                default: false,
                message: chalk.green("Would you like to add more in your order?")
            },
        ]
    )
    if (addMore.AddMore === false){
        exit = "Exit"
    }
}
let drink = await inquirer.prompt(
    [
        {
            name: "choice",
            type: "confirm",
            default: false,
            message: chalk.yellow("Would you like to add drink in your order?")
        },
    ]
);
if (drink.choice === true){
    let price = 0;
    let pricesOfDrinks = {
        small: 50,
        medium: 150,
        large: 250,
        extraLarge: 350
    }
    let drinkOrder = {
        Item: "",
        Quantity: 0,
        Price: 0,
    }
    let coldDrink = await inquirer.prompt(
        [
            {
                name: "flavour",
                type: "list",
                choices: ["Cola Next", "Fizz up"],
                message: chalk.yellow("Select the drink:")
            },
            {
                name: "size",
                type: "list",
                choices: ["250 ml", "500 ml", "1 litre", "1.5 litre" ],
                message: chalk.yellow("Select the size of the drink:")
            },
            {
                name: "quantity",
                type: "number",
                message: chalk.yellow("Enter the quantity of the drink:")
            },
        ]
    );
    if (coldDrink.size === "250 ml"){
        price = pricesOfDrinks.small * coldDrink.quantity
        drinkOrder.Price = pricesOfDrinks.small
        drinkOrder.Quantity = coldDrink.quantity
        drinkOrder.Item = coldDrink.flavour
    }
    else if (coldDrink.size === "500 ml"){
        price = pricesOfDrinks.medium * coldDrink.quantity
        drinkOrder.Price = pricesOfDrinks.medium
        drinkOrder.Quantity = coldDrink.quantity
        drinkOrder.Item = coldDrink.flavour
    }
    else if (coldDrink.size === "1 litre"){
        price = pricesOfDrinks.large * coldDrink.quantity
        drinkOrder.Price = pricesOfDrinks.large
        drinkOrder.Quantity = coldDrink.quantity
        drinkOrder.Item = coldDrink.flavour
    }
    else if (coldDrink.size === "1.5 litre"){
        price = pricesOfDrinks.extraLarge * coldDrink.quantity
        drinkOrder.Price = pricesOfDrinks.extraLarge
        drinkOrder.Quantity = coldDrink.quantity
        drinkOrder.Item = coldDrink.flavour
    }
    drinkOrders.push(drinkOrder)
    bill += drinkOrder.Price;
}
if (pizzaOrders.length > 0){
    order.push(pizzaOrders);
}
if (burgerOrders.length > 0){
    order.push(burgerOrders);
}
if (friesOrders.length > 0 ){
    order.push(friesOrders);
}
if (drinkOrders.length > 0){
    order.push(drinkOrders);
}

order.forEach((item, index) => {
    // Print the type of order (e.g., Pizza, Burger, Fries, Drink)
    console.log(chalk.yellow(`Order ${index + 1}`));
    // Iterate over the individual orders within each type
    item.forEach((orderItem) => {
        // Check if the 'type' property exists
        if ('Item' in orderItem) {
            // Print the details of each order
            console.log(chalk.green(`  Item:     ${orderItem.Item}`));
            console.log(chalk.green(`  Quantity: ${orderItem.Quantity}`));
            console.log(chalk.green(`  Price:    ${orderItem.Price}`));
        }
    });
});
console.log(chalk.red(`Your total Bill is Rs. ${bill}`))



