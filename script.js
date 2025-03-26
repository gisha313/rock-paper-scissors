function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors'
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors?");
    choice = choice ? choice.toLowerCase() : '';
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors')
        return choice;
    else {
        alert("Incorrect input!");
        return getHumanChoice();
    }
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function playRound() {
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice();

    let win = () => {
        console.log(`You win! ${capitalize(humanChoice)} ` + 
            (humanChoice === 'scissors' ? `beat` : `beats`)
            + ` ${computerChoice}!`);
        humanScore += 1
    }

    let loss = () => {
        console.log(`You lose! ${capitalize(computerChoice)} ` + 
            (computerChoice === 'scissors' ? `beat` : `beats`)
            + ` ${humanChoice}!`);
        computerScore += 1
    }

    let tie = () => {
        console.log(`Tie! You both picked ${computerChoice}!`);
    }

    if (humanChoice === 'rock'){
        if (computerChoice === 'scissors') win();
        else if (computerChoice === 'paper') loss();
        else tie();
    }
    else if (humanChoice === 'paper'){
        if (computerChoice === 'rock') win();
        else if (computerChoice === 'scissors') loss();
        else tie();
    }
    else {
        if (computerChoice === 'paper') win();
        else if (computerChoice === 'rock') loss();
        else tie();
    }
}

let humanScore = 0
let computerScore = 0

playRound();