let playerSelection;
let winner;

// Webpage prompt, user input
playerSelection = prompt("Choose your weapon (Rock / Paper/ Scissors): ");
playerSelection = playerSelection.toUpperCase();

// Computer chooses
function getComputerChoice()
{
    let choices = ["ROCK","PAPER","SCISSORS"];
    let selection = Math.floor(Math.random() * 3);    
    return choices[selection];
}


// A round of rock paper scissors can be played using this function

// 5 rounds are played, scores are kept and finally winner is declared