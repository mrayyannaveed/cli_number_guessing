#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2) User input for guessing number

// 3) Compare user input with computer generated number and show number

// const randomNumber = 13;

console.log("Welcome To Number Guessing Game");

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6: ",
  },
]);


if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulations! You gussed right number...");
} else {
  console.log("You guessed wrong number...");
}
