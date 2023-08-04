
let playerSelection;
let computerSelection;

function getComputerChoice () {
   computerSelection = Math.floor(Math.random()* 3 + 1)
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

let playerScore = 0; 
let computerScore = 0; 

function bestOfFive(){
   getComputerChoice();
   // run 'game'
   game(); 
   // store the result of 'game' in variable
   
   // if game alerts 'you win', add 1 point to
   // player, if else, give one point to computer
   if (alert === ("Congrats! You Win!")) {
      playerScore++; 
   } else {
      computerScore++; 
   }

   // keep track of score until someone hits 3
   // at 3 points declare a winner. 
}



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
