#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2) User input for guessing number

//3) Compare user imput with computer generated number andshow result

const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log("welcome to number Guessing Game");
    
const answers = await inquirer.prompt([
     {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
     },


]);

if(answers.userGuessNumber === randomNumber  ){
     console.log("Congratulations! you guessed right number.")

}else {
     console.log("You guessed wrong number");
}