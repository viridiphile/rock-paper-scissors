const buttons = Array.from(document.querySelectorAll(".player-choice"));
let computerResults = document.querySelector(".computer-score");
let playerResults = document.querySelector(".player-score");
const roundResults = document.querySelector(".results");
const roundDetails = document.querySelector(".details");
const tableComputer = document.querySelector(".computer-choice-table");
const tablePlayer = document.querySelector(".player-choice-table");
const retryButton = document.querySelector(".retry-button")

let playerScore = 0;
let computerScore = 0;

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

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let imageChoice = button.firstChild;
      if (playerScore >= 5 || computerScore >= 5) {
        return;
      }
      let playerChoice = imageChoice.getAttribute("alt");
      game(playerChoice);
    });
  });


function playRound(playerChoice) {
  playerSelection = playerChoice;
  computerSelection = getComputerChoice();

  tablePlayer.textContent = playerSelection;
  tableComputer.textContent = computerSelection;

  console.log("passed data: " + playerSelection + ", " + computerSelection);

  if (playerSelection == computerSelection) {
    // alert("A tie!");
    
    roundResults.textContent = "A tie!";
    
    console.log("That's was tie!");
    console.log("Player's score: " + playerScore);
    console.log("Computer's score: " + computerScore);
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {

    roundResults.textContent = "A win!";
    playerScore += 1;
    playerResults.textContent = playerScore;

    // alert("A win!");
    console.log("You win! " + playerSelection + " beats " + computerSelection);
    console.log("Player's score: " + playerScore);
    console.log("Computer's score: " + computerScore);
  } else {
    roundResults.textContent = "A loss!";
    computerScore += 1;
    computerResults.textContent = computerScore;

    // alert("A loss!");
    console.log("You lose! " + computerSelection + " beats " + playerSelection);
    console.log("Player's score: " + playerScore);
    console.log("Computer's score: " + computerScore);
  }
}

function game(playerChoice) {
  playRound(playerChoice);

  if (playerScore == 5) {
    // alert("You won the game!");
    roundDetails.textContent = "You won the game!"
    console.log("You are the winner!");

  } else if (computerScore == 5 ) {
    // alert("You lost the game!");
    roundDetails.textContent = "You lost the game!";
    console.log("You lost this time. Try again!");
  } else if (computerScore == playerScore == 5){
    // alert("That's a draw!");
    roundDetails.textContent = "That's a draw!";
    console.log("That's a tie at the end. Try again!");
  }

  if (playerScore>=5 || computerScore >= 5) {
    retryButton.classList.toggle("in-game")
  }
}

retryButton.addEventListener("click", () => {
  location.reload();
})



//For now, remove the logic that plays exactly five rounds.

//Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

//Add a div for displaying results and change all of your console.logs into DOM methods.

//Display the running score, and announce a winner of the game once one player reaches 5 points.

//You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
