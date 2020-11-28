//Decides the computer's move
function computerPlay() {
    let output = Math.floor(Math.random() * (10-1) + 1)

    return output <= 3 ? "rock" :
    output > 3 && output <=6 ? "paper" :
    output > 6 && output <= 9 ? "scissors" : "unknown"
    
}

//Target elements
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");
const form = document.getElementById("playerInputForm");
let playerPoints = document.getElementById("playerScore");
let computerPoints = document.getElementById("computerScore");
let playerPick = document.getElementById("playerChoice");
let computerPick = document.getElementById("computerChoice");
let winnerBox = document.querySelector("#displayWinner")
let newBox = document.querySelector("#displayWinner");


//Add event listeners. When the player clicks one of the buttons, I want the game to run
rockChoice.addEventListener("click", game);
paperChoice.addEventListener("click", game);
scissorsChoice.addEventListener("click", game);
newBox.addEventListener("click", reset);


// Declare selection variables and score
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

//Function compares the two selections, determines a winner and adjusts the score appropriately.
function playRound(playerSelection, computerSelection) {
//Lowercase so that inputs match the if statement values
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();
    
    //Win-lose-draw conditions
    if(playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`
       }

    else if(playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`
       }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;

        return `You lose! ${computerSelection} beats ${playerSelection}.`
       }
       else if(playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`
       }
    
       else if(playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`
       }
       else if(playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`
       }

       else {
           return "Draw!"
       }
}

// The whole process starts when the player clicks rock, paper or scissors. 
function game(event) {
    //Check that this is a new game. If there's a score of 5, don't play a new round
    if (playerScore === 5 || computerScore === 5) {
        return
    }

    //the player selection is chosen based on the name of the button that was pressed, and the computer selection is generated randomly.

    playerSelection = event.target.name;
    computerSelection = computerPlay();
    
    //Then, the selections are compared with the play round function and scores are updated.  
   playRound(playerSelection, computerSelection)

   //The selections and scores are displayed on-screen (HTML is updated)
   playerPick.innerHTML = playerSelection;
   computerPick.innerHTML = computerSelection;
   playerPoints.innerHTML = playerScore;
   computerPoints.innerHTML = computerScore;

   //End the game if one player reaches five. Pass the win/loss message to the function that displays the result

   if (playerScore === 5) {      
        displayWinner("Game Over! You win!")
    }

    if (computerScore === 5) {
        displayWinner("Game Over! You lose!")
    }

}

//Displays the winner message and new game button.
function displayWinner(message) {
    //Makes the winner box div visible
winnerBox.classList.replace("hide", "gameOver");
//Targets the paragraph in the displayWinner div
let para = document.querySelector("#winnerMessage");

//Then replaces the text inside.
para.innerHTML = message
}

// Resets scores to zero and hides the winner box. Ready for a new game.
function reset() {
    playerScore = 0;
    computerScore = 0;
    playerPoints.innerHTML = playerScore;
    computerPoints.innerHTML = computerScore;

    winnerBox.classList.replace("gameOver", "hide")
}