
let playerSelection;
let computerSelection;

playerSelection = prompt("Choose Rock, Paper, or Scissors:");
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

// next step.

// Write a NEW function called game(). 
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
