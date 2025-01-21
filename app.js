// ===============================
// 1. Global Variables and Constants
// ===============================
let humanScore = 0;
let computerScore = 0;
let roundWinner = "";
let isGameOver = false;

// Buttons and DOM elements
const button_rock = document.createElement("button");
const button_paper = document.createElement("button");
const button_scissors = document.createElement("button");
const button_start = document.createElement("button");
const div = document.createElement("div");
const results_div = document.createElement("div");
const selections = document.createElement("p");
const scores = document.createElement("p");
const h1 = document.querySelector("h1");
const howToPlay = document.createElement("div");
const instructions = document.createElement("p");
const button_close = document.createElement("button");
const restart_div = document.createElement("div");
const restart_text = document.createElement("p");
const restart_button = document.createElement("button");
const final_score_readout = document.createElement("p");

// ===============================
// 2. Utility Functions
// ===============================
function getComputerChoice() {
  const compSelect = Math.floor(Math.random() * 3);
  if (compSelect === 0) return "Rock";
  if (compSelect === 1) return "Paper";
  return "Scissors";
}

// ===============================
// 3. Game Logic Functions
// ===============================
function playRound(humanSelection, computerChoice) {
  if (humanSelection === computerChoice) {
    roundWinner = "tie";
  } else if (
    (humanSelection === "Rock" && computerChoice === "Scissors") ||
    (humanSelection === "Paper" && computerChoice === "Rock") ||
    (humanSelection === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    roundWinner = "player";
  } else {
    computerScore++;
    roundWinner = "computer";
  }

  displayResult(humanSelection, computerChoice);
  checkFinalResult();
}

function displayResult(humanSelection, computerChoice) {
  if (roundWinner === "tie") {
    selections.innerText = `It's a tie! Computer also chose ${computerChoice}.`;
  } else if (roundWinner === "player") {
    selections.innerText = `You win! ${humanSelection} beats ${computerChoice}!`;
  } else if (roundWinner === "computer") {
    selections.innerText = `Computer wins! ${computerChoice} beats ${humanSelection}.`;
  }
  scores.innerText = `PLAYER ${humanScore} vs ${computerScore} COMPUTER`;
}

function checkFinalResult() {
  if (humanScore === 5 || computerScore === 5) {
    isGameOver = true;
    button_rock.disabled = true;
    button_paper.disabled = true;
    button_scissors.disabled = true;
    
    if (humanScore === 5) {
      selections.innerText = `Congratulations! You won the game with a score of 5 to ${computerScore}.`;
    } else {
      selections.innerText = `Game over! Computer wins with a score of 5 to ${humanScore}.`;
    }

    restartGameMessage();
  }
}

function restartGameMessage() {
  document.body.appendChild(restart_div);
  restart_div.classList.add("restart_div");
  restart_button.classList.add("restart_button");
  restart_div.appendChild(restart_text);
  restart_div.appendChild(final_score_readout);
  final_score_readout.classList.add("final_scores");
  if(humanScore > computerScore){
  restart_text.innerText = "Congratulations! You Won!";
} else {
    restart_text.innerText = 'Computer wins!'
};
  final_score_readout.innerText = `PLAYER ${humanScore} vs ${computerScore} COMPUTER`;
  restart_div.appendChild(restart_button);
  restart_button.innerText = "RESTART";
}

function gameReset() {
  humanScore = 0;
  computerScore = 0;
  scores.innerText = "";
  selections.innerText = "";
  button_rock.disabled = false;
  button_paper.disabled = false;
  button_scissors.disabled = false;
}

// ===============================
// 4. DOM Manipulation and Event Listeners
// ===============================
// Style and setup buttons
div.classList.add("btn_container");
button_start.textContent = "START GAME";
button_start.classList.add("start_button");
button_rock.textContent = "Rock";
button_paper.textContent = "Paper";
button_scissors.textContent = "Scissors";
scores.classList.add("scores");

// Add buttons to the page
document.body.appendChild(div);
document.body.appendChild(results_div);
div.appendChild(button_start);

// Restart button listener
restart_button.addEventListener("click", () => {
  gameReset();
  restart_div.remove();
});

// Start game button listener
button_start.addEventListener("click", () => {
  div.appendChild(button_rock);
  div.appendChild(button_paper);
  div.appendChild(button_scissors);
  results_div.appendChild(selections);
  results_div.appendChild(scores);
  button_start.remove();

  const choices = ["Rock", "Paper", "Scissors"];
  const buttons = [button_rock, button_paper, button_scissors];

  buttons.forEach((button, index) => {
    button.addEventListener("click", () =>
      playRound(choices[index], getComputerChoice())
    );
  });
});

// How to Play button listener
h1.addEventListener("click", () => {
  document.body.appendChild(howToPlay);
  howToPlay.classList.add("howToPlay");
  instructions.innerText =
    "How to play: Rock, Paper, Scissors is a game where you pick rock, paper, or scissors to compete against the computer. Rock beats scissors, scissors beats paper, and paper beats rock. Choose wisely - the first to 5 wins!";
  howToPlay.appendChild(instructions);
  howToPlay.appendChild(button_close);
  button_close.innerText = "Close";
  button_close.classList.add("close-btn");

  button_close.addEventListener("click", () => {
    howToPlay.remove();
  });
});
