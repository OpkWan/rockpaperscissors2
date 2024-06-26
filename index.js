let humanScore = 0;

let computerScore = 0;

//EVENT LISTENERS
let btnRock = document.getElementById("rock")
let btnPaper = document.getElementById("paper")
let btnScissors = document.getElementById("scissors")

btnRock.addEventListener("click", function(){playRound("rock", getComputerChoice())})
btnPaper.addEventListener("click", function(){playRound("paper", getComputerChoice())})
btnScissors.addEventListener("click", function(){playRound("scissors", getComputerChoice())})


// Computer Choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

const container = document.getElementById("container")
const theWinner = document.createElement("div")
const theScores = document.createElement("div")

// Work In Progress
const humanScoreValue = document.getElementById("human-score-value").textContent = humanScore
const computerScoreValue = document.getElementById("computer-score-value").textContent = computerScore
// Work In Progress

container.appendChild(theWinner)
container.appendChild(theScores)


// Play Round
function playRound(humanChoice, computerChoice) {
  // Determine the winner
  let winner;
  if (humanChoice === computerChoice) {
    winner = "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "human";
  } else {
    winner = "computer";
  }





  console.log(humanChoice, computerChoice);

function checkWinner (){
  if (winner === "tie") {
    theWinner.textContent = "T I E"
  } else if (winner === "human") {
    theWinner.textContent = "YOU WON"
    humanScore++;
  } else{
    theWinner.textContent = "COMPUTER WON"
    computerScore++;
  }
}
checkWinner()

// Play Game

function playGame () {
  if (humanScore >= 5 && computerScore < 5) {
    theScores.textContent = "You Won The Game!"
    console.log();
  } else if (humanScore < 5 && computerScore >= 5) {
    theScores.textContent = "Computer Wins The Game!";
  } 
}
playGame()
}