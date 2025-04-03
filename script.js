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

const displayMap = new Map([
    ['rock', '🪨'],
    ['paper', '📃'],
    ['scissors', '✂️']
]);

const arenaDiv = document.querySelector('.arena');
const msgBox = document.querySelector('.msg');

function displayChoices(human, computer) {
    const humanChoiceDiv = document.querySelector(".human-choice");
    const computerChoiceDiv = document.querySelector(".computer-choice")

    humanChoiceDiv.textContent = displayMap.get(human);
    computerChoiceDiv.textContent = displayMap.get(computer);
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let result = "";

    let win = () => {
        msgBox.textContent = (`You win! ${capitalize(humanChoice)} ` + 
            (humanChoice === 'scissors' ? `beat` : `beats`)
            + ` ${computerChoice}!`);
        result = "win";
        arenaDiv.style.cssText = 'background-color: rgb(87, 235, 68, 0.5)'
    }

    let loss = () => {
        msgBox.textContent = (`You lose! ${capitalize(computerChoice)} ` + 
            (computerChoice === 'scissors' ? `beat` : `beats`)
            + ` ${humanChoice}!`);
        result = "loss";
        arenaDiv.style.cssText = 'background-color: rgb(237, 33, 33, 0.5)';
    }

    let tie = () => {
        msgBox.textContent = (`Tie! You both picked ${computerChoice}!`);
        result = "tie";
        arenaDiv.style.cssText = 'background-color: rgb(244, 250, 125, 0.5)';
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

    displayChoices(humanChoice, computerChoice)
    return result;
}

function update(result) {
    humanScore = result === 'win' ? humanScore + 1 : humanScore;
    computerScore = result === 'loss' ? computerScore + 1 : computerScore;

    humanScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;


    if (humanScore === 5 && computerScore === 5){
        msgBox.textContent = `It's a tie! Play again?!`;
        document.body.style.cssText = 'background-color: rgb(244, 250, 125, 0.5)';
    }
        
    else if (humanScore === 5){
        msgBox.textContent = `You won!!! Play again?!`;
        document.body.style.cssText = 'background-color: rgb(87, 235, 68, 0.5)';
    }
        
    else if (computerScore === 5){
        msgBox.textContent = `You lost... Play again?!`;
        document.body.style.cssText = 'background-color: rgb(237, 33, 33, 0.5)';
    }

    if (humanScore === 5 || computerScore === 5){
        const buttons = document.querySelectorAll('.button-container > button');
        buttons.forEach((btn) => {
            btnContainer.removeChild(btn);
        });

        const yesBtn = document.createElement('button');
        yesBtn.textContent = 'Yes'

        const noBtn = document.createElement('button');
        noBtn.textContent = 'Nah'

        btnContainer.appendChild(yesBtn);
        btnContainer.appendChild(noBtn);

        yesBtn.addEventListener('click', () => {
            location.reload();
        });

        noBtn.addEventListener('click', () => {
            alert(`You don't have a choice.`)
            location.reload();
        });

    }
}

let humanScore = 0;
let computerScore = 0;

const btnContainer = document.querySelector('.button-container');
btnContainer.addEventListener('click', (event) => {
    let targetId = event.target.id || 'paper';
    let result = playRound(targetId);
    
    update(result);
});

const humanScoreDiv = document.querySelector('#human-score');
const computerScoreDiv = document.querySelector('#computer-score');

humanScoreDiv.textContent = 0;
computerScoreDiv.textContent = 0;