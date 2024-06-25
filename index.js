let humanScore = 0;

let computerScore = 0;

// Computer Choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Human Choice
function getHumanChoice() {
  let input = prompt("Enter your choice (rock, paper, or scissors): ");
  input = input.toLowerCase(); // convert to lowercase for easy comparison
  while (input !== "rock" && input !== "paper" && input !== "scissors") {
    input = prompt("Invalid input! Enter rock, paper, or scissors: ");
    input = input.toLowerCase();
  }
  return input;
}

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

  // Increment the winner's score
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }

  // Log the winner announcement
  console.log(
    `Winner: ${winner === "tie" ? "It's a tie!" : `${winner} wins!`}`
  );
  console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
}

// Play Game

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  // Declare the overall winner
  if (humanScore > computerScore) {
    console.log("Human wins the game!");
  } else if (humanScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();

