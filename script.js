//Decides the computer's move
function computerPlay() {
    let output = Math.floor(Math.random() * (10-1) + 1)

    return output <= 3 ? "rock" :
    output <= 6 ? "paper" :    "scissors"
    
}

let computerSelection = computerPlay()
let playerSelection = "rock"

function playRound(playerSelection, computerSelection) {

    playerSelection.toLowerCase();
    computerSelection.toLowerCase();
    
    if(playerSelection === "rock" && computerSelection === "scissors") {
        return `You win! ${playerSelection} beats ${computerSelection}.`
       }

    else if(playerSelection === "rock" && computerSelection === "paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
       }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
       }
       else if(playerSelection === "paper" && computerSelection === "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}.`
       }
    
       else if(playerSelection === "scissors" && computerSelection === "rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
       }
       else if(playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}.`
       }

       else {
           return "Draw!"
       }
}

function game() {
   for (let i= 1; i <= 5; i++) {
   console.log(playRound(playerSelection, computerSelection))
   console.log(i)
   }
}

game()

// Next step, add the playRound function to the game function and build the five round game component
