
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

// I am moving on to my lessons in coding.
// I think it is important to note that I am 
// aware that getComputerChoice does not refresh
// after each round. it only choses a new item 
// after the page is refreshed. I don't know why
// that is or how to fix it right now. 

// Also computerScore and playerScore do not 
// reset to zero after the bestOfFive game is 
// finished. I have not figured that out yet 
// either but I think it is more important to 
// move on and learn more instead of being a 
// perfectionist. 