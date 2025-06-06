let humanScore = 0;
let computerScore = 0;


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
    human = human.toLowerCase();
    let winner = "draw";
    if(human === "rock"){
        if(computer === "rock"){
            console.log("Draw!");
        } else if(computer === "paper"){
            console.log("You Lose!");
            computerScore++;
        } else {
            console.log("You Win!");
            humanScore++;
        }
    } else if(human === "paper"){
        if(computer === "rock"){
            console.log("You Win!");
            humanScore++;
        } else if(computer === "paper"){
            console.log("Draw!");
        } else {
            console.log("You Lose!");
            computerScore++;
        }
    } else if(human === "scissors"){
        if(computer === "rock"){
            console.log("You Lose!");
            computerScore++;
        } else if(computer === "paper"){
            console.log("You Win!");
            humanScore++;
        } else {
            console.log("Draw!");
        }
    } else{
        console.log("invalid input");
    }
}


function playGame(){
    for(let i=0;i<5;i++){
        let humanChoice = getHumanChoice();
        let compChoice = getComputerChoice();
        playRound(humanChoice, compChoice);
        console.log("you: ", humanScore);
        console.log("computer: ", computerScore)
    }
    if(humanScore > computerScore){
        console.log("You won the game!");
    } else if (humanScore < computerScore){
        console.log("You lose the game!");
    } else {
        console.log("the whole game is a draw!");
    }
}

playGame();