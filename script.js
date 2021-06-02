let score = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const roundResults = document.querySelector('#results');
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
function deleteChild() {
    
}
//check if the player wins or loses and how
function playGame(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {

        score += 1;
        const rockScissors = document.createElement('p');
        rockScissors.textContent = "You won! Rock defeats scissors";
        roundResults.appendChild(rockScissors);
        return;

    } else if (playerSelection == "rock" && computerSelection == "paper") {

        computerScore += 1;
        const rockPaper = document.createElement('p');
        rockPaper.textContent = "You lost! Rock loses to paper";
        return roundResults.appendChild(rockPaper);

    } else if (playerSelection == "paper" && computerSelection == "rock") {

        score += 1;
        const paperRock = document.createElement('p');
        paperRock.textContent = "You won! Paper defeats rock";
        return roundResults.appendChild(rockPaper);

    } else if (playerSelection == "paper" && computerSelection == "scissors") {

        computerScore += 1;
        const paperScissor = document.createElement('p');
        paperScissor.textContent = "You lost! Paper loses to scissors";
        return roundResults.appendChild(rockScissor);

    } else if (playerSelection == "scissors" && computerSelection == "paper") {

        score += 1;
        const scissorPaper = document.createElement('p');
        scissorPaper.textContent = "You won! Scissors defeats paper";
        return roundResults.appendChild(scissorPaper);

    } else if (playerSelection == "scissors" && computerSelection == "rock") {

        computerScore += 1;
        const scissorRock = document.createElement('p');
        scissorRock.textContent = "You lost! Scissors losses to rock";
        return roundResults.appendChild(scissorRock);

    } else {

        const tie = document.createElement('p');
        tie.textContent = "It's a tie!";
        return roundResults.appendChild(tie);

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
let playerSelection = '';
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
            transferId();
            playGame(transferId(), computerPlay());
        });
    });