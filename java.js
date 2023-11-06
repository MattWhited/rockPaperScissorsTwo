
let playerSelection;
let computerSelection;

//computerSelection = Math.floor(Math.random()* 3 + 1)

function getComputerChoice (computerSelection = Math.floor(Math.random()* 3 + 1)) {

   if (computerSelection === 1) {
      return ("rock");
   } else if (computerSelection === 2){
      return ("paper");
   } else {
      return ("scissors")
   }
};

//function playerChoice() {
  // playerSelection = prompt("Choose Rock, Paper, or Scissors:");
//}

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

rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);

// I am 
// aware that getComputerChoice does not refresh
// after each round. it only choses a new item 
// after the page is refreshed.

// Also computerScore and playerScore do not 
// reset to zero after the bestOfFive game is 
// finished. 


// Check List

// In our UI, the player should be able to play 
//the game by clicking on buttons rather than 
//typing their answer in a prompt.


//3) Add a div for displaying results and change
// all of your console.logs into DOM methods.
//4) Display the running score, and announce a 
// winner of the game once one player reaches 5 points.
//5) You will likely have to refactor (rework/rewrite)
// your original code to make it work for this. 
// That’s OK! Reworking old code is an important
// part of a programmer’s life.

// the buttons need to be the selectors, not 
// the prompt box

// computer choice needs to refresh after each game.

// game results needs a tally and a box


