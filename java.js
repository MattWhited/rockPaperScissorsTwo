
let playerSelection;
let computerSelection;

playerSelection = prompt("Choose Rock, Paper, or Scissors:");
computerSelection = Math.floor(Math.random()* 3 + 1)

function getComputerChoice () {
   if (computerSelection === 1) {
      return ("Rock");
   } else if (computerSelection === 2){
      return ("Paper");
   } else {
      return ("Scissor")
   }
}


// next step.

//Write a function that plays a single round of 
//Rock Paper Scissors. The function should take 
//two parameters - the playerSelection and 
//computerSelection - and then return a string 
//that declares the winner of the round like so:
//"You Lose! Paper beats Rock"