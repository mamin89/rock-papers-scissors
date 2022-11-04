const playerText = document.querySelector("#you");
const computerText = document.querySelector("#computer");
const resultText = document.querySelector("#result");
const choiceBtns = document.querySelectorAll(".choice");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

      const randNum = Math.ceil(Math.random() *3);
// /* or you can do 
//    const randNum = Math.floor(Math.random() * 3) + 1; 

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPERS";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}
function checkWinner(){
    if(player === computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPERS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPERS"){
      return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}