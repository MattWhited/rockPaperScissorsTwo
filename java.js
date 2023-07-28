
let playerSelection;
let computerSelection;

playerSelection = prompt("Choose Rock, Paper, or Scissors:");
computerSelection = Math.floor(Math.random()* 3 + 1)

function getComputerChoice (computerSelection) {{
   } if (computerSelection = 1) {
        return ("Rock");
     } else if (computerSelection = 2) {
        return ("Paper");
     } else {
        return ("Scissors");
     }
}


// if the answer is equal to 0 make it rock
// if the answer is equal to 1 make it paper
// if the answer is equal to 2 make it scissors 