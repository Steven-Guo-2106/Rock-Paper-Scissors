let humanScore = 0;
let computerScore = 0;

const score = document.querySelector("#score");
const playerScore = document.createElement("p");
playerScore.textContent = "you: " + humanScore;
score.appendChild(playerScore);
const compScore = document.createElement("p");
compScore.textContent="computer: " + computerScore;
score.appendChild(compScore);


const winnerBox = document.querySelector("#winnerBox");
const victor = document.createElement("p");
victor.textContent = "no winner"
winnerBox.appendChild(victor);

function getComputerChoice(){
    let num = Math.random()
    if(num >= 2/3){
        return "rock";
    } else if(num >= 1/3){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("rock, paper, or scissors?");
}

function playRound(human="haha", computer){
    if(playerScore==5){
        victor.textContent = "You have won the game!";
        return;
    }
    if(computerScore==5){
        victor.textContent = "You have lost the game!";
        return;
    }
    
    human = human.toLowerCase();
    if(human === "rock"){
        if(computer === "rock"){
            victor.textContent = "Draw!"
        } else if(computer === "paper"){
            victor.textContent = "You Lost!"
            computerScore++;
        } else {
            victor.textContent = "You Won!"
            humanScore++;
        }
    } else if(human === "paper"){
        if(computer === "rock"){
            victor.textContent = "You Won!"
            humanScore++;
        } else if(computer === "paper"){
            victor.textContent = "Draw!"
        } else {
            victor.textContent = "You Lost!"
            computerScore++;
        }
    } else if(human === "scissors"){
        if(computer === "rock"){
            victor.textContent = "You Lost!"
            computerScore++;
        } else if(computer === "paper"){
            victor.textContent = "You Won!"
            humanScore++;
        } else {
            victor.textContent = "Draw!"
        }
    } else{
        victor.textContent = "No Winner!"
    }

    playerScore.textContent = "you: " + humanScore;
    compScore.textContent="computer: " + computerScore;

    console.log("you: ", humanScore);
    console.log("computer: ", computerScore)
}


function playGame() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
        const compChoice = getComputerChoice();
        playRound(button.id, compChoice);
        });
    });
}

playGame();


