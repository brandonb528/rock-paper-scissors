//What's happening? 

//Get user choice
//get computer choice
//compare user and computer choice
//return results




let choices = ['rock', 'paper', 'scissor'];
let playerScore = 0;
let computerScore = 0;

let playerScoreBoard = document.getElementById('player-score');
let computerScoreBoard = document.getElementById('computer-score');

const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorChoice = document.getElementById("scissor")


function computerChoice() {
    let randomChoice = Math.floor(Math.random() * (3 - 0) + 0);
    return choices[randomChoice];
};

function winCheck(userChoice, computerChoice) {
    if (userChoice === choices[0] && computerChoice === choices[2] || 
        userChoice === choices[1] && computerChoice === choices[0] ||
        userChoice === choices[2] && computerChoice === choices[1]) {
        
        console.log('you win!');

        playerScore++;
    }
}

function tieCheck(userChoice, computerChoice) {
    if (userChoice === computerChoice){
        console.log('Tie!!!');
    }
}

function loseCheck(userChoice, computerChoice) {
    if (userChoice === choices[2] && computerChoice === choices[0] || 
        userChoice === choices[0] && computerChoice === choices[1] ||
        userChoice === choices[1] && computerChoice === choices[2]) {
        
        console.log('you lose!');

        computerScore++;
    }
}

function compareChoices(userChoice,computerChoice) {
    winCheck(userChoice, computerChoice);
    loseCheck(userChoice, computerChoice);
    tieCheck(userChoice, computerChoice);
    playerScoreBoard.innerText = `Player score is ${playerScore}`;
    computerScoreBoard.innerText = `Computer score is ${computerScore}`;
}

rockChoice.addEventListener("click", () => (compareChoices('rock', computerChoice())));
paperChoice.addEventListener("click", () => (compareChoices('paper', computerChoice())));
scissorChoice.addEventListener("click", () => (compareChoices('rock', computerChoice())));