//What's happening? 

//Get user choice
//get computer choice
//compare user and computer choice
//return results




let choices = ['rock', 'paper', 'scissors'];

function userChoice() {
    let userChoice = parseInt(prompt('Rock Paper Scissors? (1 for rock, 2 for paper, 3 for scissors')) - 1;
    return choices[userChoice];
}

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * (3 - 0) + 0);
    return choices[randomChoice];
}

console.log(userChoice());