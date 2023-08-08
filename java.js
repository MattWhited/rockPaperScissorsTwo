
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
   return (playerSelection.valueOf().toLowerCase());
}

function singleRound () {
   alert (`Computer chose ${getComputerChoice()}!` )
   if (getComputerChoice() === getPlayerChoice()){
      alert("its a tie!");
   } else if (( getComputerChoice() === 'rock') && (getPlayerChoice() === 'scissors')) {
      alert(loser);
   } else if ((getComputerChoice() === 'paper') && (getPlayerChoice() === 'rock')) {
      alert(loser);
   } else if ((getComputerChoice() === 'scissors') && (getPlayerChoice() === 'paper')) {
      alert(loser);
   } else {
      alert(winner);
   }
}

// singleRound does not work on its own any more
// because I moved the playerSelection prompt 
// into a function instead of 'prompting' upon 
// opening the page. 

function game(){
playerChoice();
singleRound();
}

let playerScore = 0; 
let computerScore = 0; 
let winner = "Congrats! You Win!"
let loser = "You Lose, Better Luck Next Time!"

function bestOfFive(){
   getComputerChoice();
   game(); 

   if (getComputerChoice() === getPlayerChoice()){
      alert("no one gets a point");
   } else if (( getComputerChoice() === 'rock') && (getPlayerChoice() === 'scissors')) {
      computerScore++;
   } else if ((getComputerChoice() === 'paper') && (getPlayerChoice() === 'rock')) {
      computerScore++;
   } else if ((getComputerChoice() === 'scissors') && (getPlayerChoice() === 'paper')) {
      computerScore++;
   } else {
      playerScore++;
   }

   if (playerScore === 3){
      alert ("You beat the computer 3 out of 5!")
   } else if (computerScore === 3){
      alert ("You lost to the computer 3 out of 5")
   }
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
