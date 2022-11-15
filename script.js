let playerScore = 0;
let computerScore = 0;
const playerChoices = document.querySelectorAll('button:not(#reset)');
playerChoices.forEach((playerChoice) => {
    playerChoice.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5) {
            [playerScore, computerScore] = game(playerChoice.value, playerScore, computerScore);
        }
    });
});
const resetGame = document.querySelector('button#reset');
resetGame.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    const resultContainer = document.querySelector('#results');
    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }
});

function game(playerSelection, playerScore, computerScore) {
    const computerSelection = getComputerChoice();
    const resultComputer = document.createElement('p');
    resultComputer.textContent = `Computer picked ${computerSelection}...`;
    const resultCode = playRound(playerSelection, computerSelection); 
    const resultFirstLine = document.createElement('p');
    if (resultCode === 1) {
        resultFirstLine.textContent = `Tie! Both picked ${playerSelection}.`;
    } else if (resultCode === 2) {
        resultFirstLine.textContent = `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
        playerScore++;
    } else if (resultCode === 3) {
        resultFirstLine.textContent = `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
        computerScore++;
    }
    const resultSecondLine = document.createElement('p');
    resultSecondLine.textContent = `Current score: ${playerScore} x ${computerScore}`;
    const resultContainer = document.querySelector('#results');
    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }
    resultContainer.appendChild(resultComputer);
    resultContainer.appendChild(resultFirstLine);
    resultContainer.appendChild(resultSecondLine);
    if (playerScore > 4) {
        const resultEnd = document.createElement('p');
        resultEnd.textContent = "You won the game!";
        resultContainer.appendChild(resultEnd);
    } else if (computerScore > 4) {
        const resultEnd = document.createElement('p');
        resultEnd.textContent = "You lost the game!";
        resultContainer.appendChild(resultEnd);
    }
    return [playerScore, computerScore];
}

function getComputerChoice() {
    const rockPaperScissors = ["rock", "paper", "scissors"];
    return rockPaperScissors[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
    if (player === computer) {
        return 1;
    } else {
        if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
            return 2;
        } else {
            return 3;
        }
    }
}