//creates two variables that keeps track of the player's scores
let score = 0;
let computerScore = 0;
//creates a variable called playerSelection which will store rock, paper, or scissor
let playerSelection = "";
//selects all buttons and stores it into the "buttons" variable
const buttons = document.querySelectorAll("button");
//gets the results div and stores it into roundResults
const roundResults = document.querySelector("#results");
//gets div of both boxes so the scores can be appended
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
//creates a paragraph to display the outcome
const winnerDeclaration = document.createElement("p");
//creates a paragraph to display the player's score
const displayScore = document.createElement("p");
//creates a paragraph to display the computer's score
const displayComputerScore = document.createElement("p");

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
//check if the player wins or loses and how
function playGame(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {

        score += 1;
        winnerDeclaration.textContent = "You won! Rock defeats Scissors";
        displayScore.textContent = score;
        displayComputerScore.textContent = computerScore;
        return;

    } else if (playerSelection == "rock" && computerSelection == "paper") {

        computerScore += 1;
        winnerDeclaration.textContent = "You lost! Rock loses to Paper";
        displayScore.textContent = score;
        displayComputerScore.textContent = computerScore;
        return;

    } else if (playerSelection == "paper" && computerSelection == "rock") {

        score += 1;
        winnerDeclaration.textContent = "You won! Paper defeats rock";
        displayScore.textContent = score;
        displayComputerScore.textContent = computerScore;
        return;

    } else if (playerSelection == "paper" && computerSelection == "scissors") {

        computerScore += 1;
        winnerDeclaration.textContent = "You lost! Paper loses to scissors";
        displayScore.textContent = score;
        displayComputerScore.textContent = computerScore;
        return;

    } else if (playerSelection == "scissors" && computerSelection == "paper") {

        score += 1;
        winnerDeclaration.textContent = "You won! Scissors defeats paper";
        displayScore.textContent = score;
        displayComputerScore.textContent = computerScore;
        return;

    } else if (playerSelection == "scissors" && computerSelection == "rock") {

        computerScore += 1;
        winnerDeclaration.textContent = "You lost! Scissors loses to rock";
        displayScore.textContent = score;
        displayComputerScore.textContent = computerScore;
        return;

    } else {

        winnerDeclaration.textContent = "It's a tie!";
        displayScore.textContent = score;
        displayComputerScore.textContent = computerScore;
        return;

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

//Once the player chooses a button, it calls back the other functions to run.
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
                playerSelection = button.id;
                transferId();
                playGame(transferId(), computerPlay());
                if (score == 5) {
                    alert("You won!")
                    score = 0;
                    computerScore = 0;
                } else if (computerScore == 5) {
                    alert("You lost...")
                    score = 0;
                    computerScore = 0;
                }
        });
    });
//adds the paragraph created earlier as a child of the results div
roundResults.appendChild(winnerDeclaration);
//appends the scores as a paragraph
box1.appendChild(displayScore);
box2.appendChild(displayComputerScore);