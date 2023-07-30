
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

function getPlayerChoice () {
   return playerSelection.valueOf().toLowerCase();
}


function singleRound () {

}

// next step.

//Write a function that plays a single round of 
//Rock Paper Scissors. The function should take 
//two parameters - the playerSelection and 
//computerSelection - and then return a string 
//that declares the winner of the round like so:
//"You Lose! Paper beats Rock"

// take players input
// use built ins to make it either all upper case 
// or all to lower case. 

// turn players answer into something computer 
// readable, like 1,2,3...

// compare player answer to computer answer
// alert what the computers answer was. 
// alert either win or lose. 