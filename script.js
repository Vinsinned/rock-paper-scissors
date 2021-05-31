let score = 0;
let computerScore = 0;
//Computer chooses rock, paper, or scissors randomly
function computerPlay() {
    let random = Math.floor(Math.random()*3) + 1;
    if (random == 1) {
        return ("rock");
    } else if (random == 2) {
        return ("paper");
    } else if (random == 3) {
        return ("scissors");
    } else {
        return ("ERROR, PLEASE DEBUG YOUR CODE");
    }
}
//Player chooses rock, paper, or scissors, and if not, then do it again until done
//Plays a single round which takes the player's choice and computer's choice and see whether the player or the computer wins
function playGame(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        score += 1;
        return ("You won! Rock defeats scissors");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        return ("You lost! Rock loses to paper");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        score += 1;
        return ("You won! Paper defeats rock");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        return ("You lost! Paper loses to scissors");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        score += 1;
        return ("You won! Scissors defeats paper");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        return ("You lost! Scissors losses to rock");
    } else {
        return ("It's a tie!");
    }
}
//change the button id into one of the choices
function transferId() {
    if (playerSelection == "1") {
        return ("rock");
    } else if (playerSelection == "2") {
        return ("paper");
    } else if (playerSelection == "3") {
        return ("scissors");
    } else {
        return ("Something went WRONG");
    }
}
//Used alert instead of console.log as it is easier to see the score, easy to change later
const buttons = document.querySelectorAll('button');
let playerSelection = '';
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
            transferId();
            playGame(transferId(), computerPlay());
        });
    });
