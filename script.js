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
    let choice = prompt("Rock, paper, scissors?").toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors')
        return choice;
    else {
        alert("Incorrect input!");
        return getHumanChoice();
    }
}

console.log(getHumanChoice())