const rockPaperScissors = ["rock", "paper", "scissors"];

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection;
        let message = "Rock, paper or scissors?";
        let firstRun = true;
        while (true) {
            playerSelection = prompt(message).toLowerCase();
            if (rockPaperScissors.includes(playerSelection)) {
                break;
            } else if (firstRun) {
                message = "Invalid input!\n" + message;
                firstRun = false;
            }
        }
        const computerSelection = getComputerChoice();
        const resultCode = playRound(playerSelection, computerSelection); 
        let resultPhrase;
        if (resultCode === 1) {
            resultPhrase = `Tie! Both picked ${playerSelection}.`;
        } else if (resultCode === 2) {
            resultPhrase = `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
            playerScore++;
        } else if (resultCode === 3) {
            resultPhrase = `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
            computerScore++;
        }
        console.log(resultPhrase);
        console.log(`Current score: ${playerScore} x ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("Tie!")
    }
}

function getComputerChoice() {
    return rockPaperScissors[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
    if (player === computer) {
        return 1;
    } else {
        const win = (player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper');
        if (win) {
            return 2;
        } else {
            return 3;
        }
    }
}

game();