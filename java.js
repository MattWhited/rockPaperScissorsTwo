
let playerSelection;
let computerSelection;


computerSelection = Math.floor(Math.random()* 3 + 1)

function getComputerChoice () {
   if (computerSelection === 1) {
      return ("rock");
   } else if (computerSelection === 2){
      return ("paper");
   } else {
      return ("scissors")
   }
}

function playerChoice() {
   playerSelection = prompt("Choose Rock, Paper, or Scissors:");
}

function getPlayerChoice () {
   return playerSelection.valueOf().toLowerCase();
}


function singleRound () {
   alert (`Computer chose ${getComputerChoice()}!` )
   if (getComputerChoice() === getPlayerChoice()){
      alert("its a tie!");
   } else if (( getComputerChoice() === 'rock') && (getPlayerChoice() === 'scissors')) {
      alert("You Lose Sucker!");
   } else if ((getComputerChoice() === 'paper') && (getPlayerChoice() === 'rock')) {
      alert(" You Lose Dr. Lame Head!");
   } else if ((getComputerChoice() === 'scissors') && (getPlayerChoice() === 'paper')) {
      alert("You Lose So Bad You Dumb Nerd!");
   } else {
      alert("Congrats! You Win!")
   }
}

function game(){
playerChoice();
singleRound();
}

let playerScore; 
let computerScore; 

 
// store the answer from single round.
// once you have played best of five declare a winner. 

// I might be able to store the results of the
// game as a changing variable.
// such as computerscore and playerscore. 



// next step.

// Use the previous function inside of this one 
// to play a 5 round game that keeps score and 
// reports a winner or loser at the end.

//You have not officially learned how to “loop” 
// over code to repeat function calls… if you 
// already know about loops from somewhere else 
// (or if you feel like doing some more learning)
// feel free to use them. If not, don’t worry! 
// Just call your playRound function 5 times in 
// a row. Loops are covered in the next lesson.
