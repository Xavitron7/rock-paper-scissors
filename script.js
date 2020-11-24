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


//Add event listeners. When the player clicks one of the buttons, I wantthe game to run
rockChoice.addEventListener("click", game);
paperChoice.addEventListener("click", game);
scissorsChoice.addEventListener("click", game);


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

// Runs the playRound function. The whole process starts when the player clicks rock, paper or scissors. 
function game(event) {

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

   //End the game if one player reaches five

   if (playerScore === 5) {
       alert("Game Over! You win!");
       playerScore = 0;
       computerScore = 0;
    }

    if (computerScore === 5) {
        alert("Game Over! You lose!");
        playerScore = 0;
       computerScore = 0;
    }

}



// Make the game responsive.