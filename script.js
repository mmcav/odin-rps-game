gameStart();

function gameStart() {
    let playerScore = 0;
    let computerScore = 0;
    const playerChoices = document.querySelectorAll('button');
    playerChoices.forEach((playerChoice) => {
        playerChoice.addEventListener('click', () => {
            [playerScore, computerScore] = game(playerChoice.value, playerScore, computerScore);
        });
    });
}

function game(playerSelection, playerScore, computerScore) {
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
    resultPhrase += `\nCurrent score: ${playerScore} x ${computerScore}`
    const resultContainer = document.querySelector('#results');
    const result = document.createElement('p');
    result.textContent = resultPhrase;
    resultContainer.appendChild(result);
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