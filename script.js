//What's happening? 

//Get user choice
//get computer choice
//compare user and computer choice
//return results




let choices = ['rock', 'paper', 'scissors'];

let userChoice = () => {
    let userChoice = parseInt(prompt('Rock Paper Scissors? (1 for rock, 2 for paper, 3 for scissors')) - 1;
    return choices[userChoice];
}

let computerChoice = () => {
    let randomChoice = 1//Math.floor(Math.random() * (3 - 0) + 0);
    return choices[randomChoice];
};

function winCheck(userChoice, computerChoice) {
    if (userChoice === choices[0] && computerChoice === choices[2] || 
        userChoice === choices[1] && computerChoice === choices[0] ||
        userChoice === choices[2] && computerChoice === choices[1]) {
        
        console.log('you win!');
    }
}


function compareChoices(userChoice,computerChoice) {
    winCheck(userChoice, computerChoice);
}

compareChoices(userChoice(), computerChoice())