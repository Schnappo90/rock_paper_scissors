

// Global Scores
let humanScore = 0;
let computerScore = 0;

// Computer random choice function

function getComputerChoice() {
    let compSelect = Math.floor(Math.random()*3);
    if(compSelect === 0) {
        return 'rock';

    } else if(compSelect === 1) {
        return 'paper';
    
    } else if(compSelect === 2) {
        return 'scissors';
    }
}

// Human input

function getHumanChoice() {
    let humanSelect = prompt('Enter Rock/Paper/Scissors:').toLowerCase();
    while(humanSelect !== 'rock' && humanSelect !== 'paper' && humanSelect !== 'scissors') {
       humanSelect = prompt(`'${humanSelect}' is not valid! Enter Rock/Paper/Scissors`).toLowerCase();
    }
    return humanSelect;
}


// Single round function

function playRound(humanSelection,computerChoice){
    // player selection evaluated against computer. If inputs are the same, it's a tie.
    if(humanSelection === computerChoice) {
        console.log(`It's a tie! You both chose ${humanSelection}!`);
        console.log(`Player Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    
    } else if(
        (humanSelection === 'rock' && computerChoice === 'scissors') ||
        (humanSelection === 'paper' && computerChoice === 'rock') ||
        (humanSelection === 'scissors' && computerChoice === 'paper')
    
    ) { 
        humanScore++;
        console.log(`You win! ${humanSelection} beats ${computerChoice}`)
        console.log(`Player Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    
    } else {
        computerScore++;
        console.log(`Sorry, Computer wins! ${computerChoice} beats ${humanSelection}.`)
        console.log(`Player Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }

    scores.innerText = `Your Score: ${humanScore} vs Computer Score: ${computerScore}`;
}

function finalScores() {
    console.log("Final Score:");
    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`)
    humanScore = 0;
    computerScore = 0;
}



function playGame() {
    // let round = 1;

    // console.log("Welcome to Rock Paper Scissors!");
    // for(let i = 1; i <= 5; i++) { 
    //     console.log(`Round ${round }`);
    //     const humanSelection = getHumanChoice();
    //     const computerChoice = getComputerChoice();
    //     const result = playRound(humanSelection,computerChoice);
    //     console.log(result);            
    //     round++;
    
    // } if (humanScore > computerScore) {
    //     console.log(`You win overall!`);
      
    
    // } else if(computerScore > humanScore){
    //     console.log("The Computer wins overall!");
    
    // } else {
    //     console.log("It's a draw overall!");
    
    // } 
    // finalScores();

    }

const button_rock = document.createElement("button");
const button_paper = document.createElement("button");
const button_scissors = document.createElement("button");
const button_start = document.createElement("button");
const div = document.createElement("div");
const results_div = document.createElement("div");
const scores = document.createElement("p");


div.classList.add("btn_container");
const btn_container = document.querySelector(".btn_container");
button_start.textContent = 'Start Game';
button_rock.textContent = 'Rock';
button_paper.textContent = 'Paper';
button_scissors.textContent = 'Scissors';

document.body.appendChild(div);
document.body.appendChild(results_div);
div.appendChild(button_start);


button_start.addEventListener('click',() => {
    div.appendChild(button_rock);
    div.appendChild(button_paper);
    div.appendChild(button_scissors);
    results_div.appendChild(scores);
    button_start.remove();

    button_rock.addEventListener('click', () => {
        playRound('rock',getComputerChoice());
    })
    
    button_paper.addEventListener('click', () => {
        playRound('paper',getComputerChoice());
    })
    
    button_scissors.addEventListener('click', () => {
        playRound('scissors',getComputerChoice());
    })

})


button_rock.addEventListener('click', () => {
    playRound('rock',getComputerChoice());
})

button_paper.addEventListener('click', () => {
    playRound('paper',getComputerChoice());
})

button_scissors.addEventListener('click', () => {
    playRound('scissors',getComputerChoice());
})