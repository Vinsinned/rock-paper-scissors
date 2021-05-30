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
function playerPlay() {
    let playerSelection = prompt("Please choose either rock, paper, or scissors");
    let playerChoice = playerSelection.toLowerCase();
    if (playerChoice == "rock") {
        return("rock");
    } else if (playerChoice == "paper") {
        return ("paper");
    } else if (playerChoice == "scissor" || playerChoice == "scissors") {
        return ("scissors");
    } else {
        alert("Sorry, but please try again");
        return playerPlay();
    }
}
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
        return ("It's a tie!")
    }
}
//combines all of the other function and plays a 5 round game, keeping scores and telling them to the player after each round is over
function game() {
    for (i = 0; i < 5; i++) {
        alert(playGame(playerPlay(), computerPlay()));
        alert(score + " to " + computerScore);
    }
    if (score > computerScore) {
        alert("You have won this game!");
        return ("Winner");
    } else if (computerScore > score) {
        alert("Better luck next time!");
        return ("Loser");
    } else {
        alert("It was a TIE!");
        return ("tie");
    }
}
//Used alert instead of console.log as it is easier to see the score, easy to change later
