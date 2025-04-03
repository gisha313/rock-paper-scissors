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

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let result = "";

    let win = () => {
        console.log(`You win! ${capitalize(humanChoice)} ` + 
            (humanChoice === 'scissors' ? `beat` : `beats`)
            + ` ${computerChoice}!`);
            result = "win";
    }

    let loss = () => {
        console.log(`You lose! ${capitalize(computerChoice)} ` + 
            (computerChoice === 'scissors' ? `beat` : `beats`)
            + ` ${humanChoice}!`);
            result = "loss";
    }

    let tie = () => {
        console.log(`Tie! You both picked ${computerChoice}!`);
        result = "tie";
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

    return result;
}

let humanScore = 0;
let computerScore = 0;

const btnContainer = document.querySelector('.button-container');
btnContainer.addEventListener('click', (event) => {
    let targetId = event.target.id;
    let result = playRound(targetId);

    humanScore = result === 'win' ? humanScore + 1 : humanScore;
    computerScore = result === 'loss' ? computerScore + 1 : computerScore;

    humanScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;
    
});

const humanScoreDiv = document.querySelector('#human-score');
const computerScoreDiv = document.querySelector('#computer-score');

humanScoreDiv.textContent = 0;
computerScoreDiv.textContent = 0;