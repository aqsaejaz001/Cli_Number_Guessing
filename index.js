import inquirer from "inquirer";
// 1) computer will genrate a random number
// 2) user input for guessing number
// 3) compare user input with computer genrated number and show result 
const randomNumber = Math.floor(Math.random() * 6);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 6",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number");
}
else {
    console.log(" you guessed a wrong number");
}
