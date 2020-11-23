//Decides the computer's move
function computerPlay() {
    let output = Math.floor(Math.random() * (10-1) + 1)

    return output <= 3 ? "rock" :
    output > 3 && output <=6 ? "paper" :
    output > 6 && output <= 9 ? "scissors" : "unknown"
    
}

//Initial selection values. Player's is set to default list selection
let computerSelection = computerPlay()
let playerSelection = playerChoice.value;

//Targeting the dropdown list player uses as an input
let form = document.getElementById("playerInputForm");

//When the submit button is pressed, run the game function
form.addEventListener("submit", game)

//Testing the selection value outputs
console.log(`Computer selection: ${computerSelection}`)
console.log(`Player selection: ${playerSelection}`)

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

// 
function game(event) {
    //Prevent default action (page refresh)
        event.preventDefault();
        console.clear()

        playerSelection = playerChoice.value;
        computerSelection = computerPlay();
    
    
   console.log(playRound(playerSelection, computerSelection))
   console.log("Player: " + playerSelection);
   console.log("Computer: " + computerSelection);
   console.log(`Score = Player ${playerScore}: ${computerScore} Computer`)
   

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



// Change input form layout to 3 buttons - one for each option