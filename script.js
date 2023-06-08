/* In a round, 
 winner = 0 => player wins
 winner = 1 => computer wins
 winner = 2 => draw
*/
let winner;

// Webpage prompt, user input
function getPlayerChoice()
{
    let playerSelection = prompt("Choose your weapon (Rock / Paper/ Scissors): ");
    playerSelection = playerSelection.toUpperCase();
    return playerSelection;
}

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

function game()
{
    /* 
    Array to maintain the score across rounds
    scores[0]: Player score
    scores[1]: Computer score
    */
    let scores = [0,0];
    
    for(let i = 1; i <= 5; i++)
    {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        let resultText = playRound(playerSelection,computerSelection);
        console.log(resultText);

        switch(winner)
        {
            case 0:
                scores[0]++;
                break;
            case 1:
                scores[1]++;
                break;
        }

        let scoreText = `Score:
        Player:${scores[0]}
        Computer:${scores[1]}`;

        console.log(`After round ${i},`);
        console.log(scoreText);

        if(i<5)
        {
            console.log("Next round...");
        }
    }

    let matchResultText;
    
    if(scores[0] > scores[1])
    {
        matchResultText = "Player wins the match!";
    }
    else if(scores[0] < scores[1])
    {
        matchResultText = "Computer wins the match!";
    }
    else
    {
        matchResultText = "Match is a draw!";
    }

    console.log(matchResultText);
}

game();