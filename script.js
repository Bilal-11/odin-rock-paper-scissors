let playerSelection;

/* In a round, 
 winner = 0 => player wins
 winner = 1 => computer wins
 winner = 2 => draw
*/
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
function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        winner = 2;
        return "Its a draw!"
    }
    else if(playerSelection === "ROCK")
    {
        if(computerSelection === "PAPER")
        {
            winner = 1;
            return "You Lose! Paper beats Rock"
        }
        else
        {
            winner = 0;
            return "You Win! Rock beats Scissors"
        }
    }
    else if(playerSelection === "PAPER")
    {
        if(computerSelection === "SCISSORS")
        {
            winner = 1;
            return "You Lose! Scissors beats Paper"
        }
        else
        {
            winner = 0;
            return "You Win! Paper beats Rock"
        }
    }
    else if(playerSelection === "SCISSORS")
    {
        if(computerSelection === "ROCK")
        {
            winner = 1;
            return "You Lose! Rock beats Scissors"
        }
        else
        {
            winner = 0;
            return "You Win! Scissors beats Paper"
        }
    }
    else
    {
        winner = 1;
        return "You typed random ooga booga! Computer wins this round!"
    }
}

// 5 rounds are played, scores are kept and finally winner is declared