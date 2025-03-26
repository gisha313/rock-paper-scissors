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
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let result = '';
    for (let i = 0; i < 5; i++){
        result = playRound();
        if (result === 'win') humanScore++;
        else if (result === 'loss') computerScore++;

        console.log(`Player vs. Computer
        ${humanScore} : ${computerScore}`);
    }

    if (humanScore > computerScore)
        console.log("You've won! Congrats!");
    else if (humanScore === computerScore)
        console.log("The game was a tie.");
    else
        console.log("You lose... Sorry...")
}

playGame()