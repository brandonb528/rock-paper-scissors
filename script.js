//What's happening? 

//Get user choice
//get computer choice
//compare user and computer choice
//return results




let choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * (3 - 0) + 0);
    return choices[randomChoice];
}

console.log(computerPlay());