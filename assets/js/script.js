let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let computerChoice = "rock";
  switch (num) {
    case 0:
      computerChoice = "paper";
      break;
    case 1:
      computerChoice = "scissors";
      break;
    case 2:
      computerChoice = "rock";
      break;
  }
  console.log("Computer's choice: " + computerChoice);
  return computerChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Input Rock, Paper or Scissors").toLowerCase();
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
  ) {
    console.log("Player's choice: " + playerChoice);
  } else {
    alert("Wrong input");
    getPlayerChoice();
  }
  return playerChoice;
}

function playRound() {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();

  console.log("passed data: " + playerSelection + ", " + computerSelection);

  if (playerSelection == computerSelection) {
    alert("A tie!");
    console.log("That's was tie!");
    console.log("Player's score: " + playerScore);
    console.log("Computer's score: " + computerScore);
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    alert("A win!");
    playerScore += 1;
    console.log("You win! " + playerSelection + " beats " + computerSelection);
    console.log("Player's score: " + playerScore);
    console.log("Computer's score: " + computerScore);
  } else {
    alert("A loss!");
    computerScore += 1;
    console.log("You lose! " + computerSelection + " beats " + playerSelection);
    console.log("Player's score: " + playerScore);
    console.log("Computer's score: " + computerScore);
  }
}

function game () {
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (playerScore > computerScore) {
        alert("You won the game!");
        console.log("You are the winner!");
    } else if (playerScore < computerScore) {
        alert("You lost the game!");
        console.log("You lost this time. Try again!");
    } else {
        alert("That's a draw!");
        console.log("That's a tie at the end. Try again!")
    }
}

game();