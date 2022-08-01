 let result = "";
   let playerChoice = "";
const element1 = document.getElementById("rock");
element1.addEventListener("click", rockFunction);

function rockFunction() {
  playerChoice = "rock"
  console.log(game());
}
const element2 = document.getElementById("paper");
element2.addEventListener("click", paperFunction);

function paperFunction() {
  playerChoice = "paper"
  console.log(game());
}
const element3 = document.getElementById("scissors");
element3.addEventListener("click", scissorsFunction);

function scissorsFunction() {
  playerChoice = "scissors"
  console.log(game());
}
let playerScore = 0;
let comScore = 0;
let gameResult ="";

    function getComputerChoice() {
      decision = Math.floor(Math.random() * 3); //random number between 1 and 3 is chosen which corresponds to choices
      if (decision === 1) {
        return "Rock";
      } else if (decision === 2) {
        return "Paper";
      } else {
        return "Scissors";
      }
    }

    function playRound(playerSelection, computerSelection) {
      player = playerSelection.toLowerCase();
      computer = computerSelection.toLowerCase();
      if (player === computer) {
        return "You tied!";
      } else if (player === "rock" && computer === "scissors") {
        return "You win!";
      } else if (player === "paper" && computer === "scissors") {
        return "You lose!";
      } else if (player === "rock" && computer === "paper") {
        return "You lose!";
      } else if (player === "scissors" && computer === "paper") {
        return "You win!";
      } else if (player === "paper" && computer === "rock") {
        return "You win!";
      } else if (player === "scissors" && computer === "rock") {
        return "You lose!";
      }
    }
    function game() {
      //for (let i = 0; i < 5; i++) {
        result = playRound(playerChoice, getComputerChoice());
        console.log(result);
        const container = document.querySelector('#matchResults');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = result;
        container.appendChild(content);
        if (result === "You win!") {
          playerScore++;
        } else if (result === "You lose!") {
          comScore++;
        } else {
        }
     // }
     if(playerScore + comScore == 5){
      if (playerScore > comScore) {
        gameResult = "You won " + playerScore + " : " + comScore;
      } else if (playerScore < comScore) {
        gameResult = "You lost " + playerScore + " : " + comScore;
      } else if (playerScore === comScore) {
        gameResult = "You tied";
      }
      playerScore = 0;
      comScore =0;
      return gameResult;
    } else{
      currentScore = "The current score is " + playerScore + " : " + comScore; 
      const container = document.querySelector('#CurrentScore');
      const content = document.createElement('div');
      content.classList.add('content');
      content.textContent = currentScore;
      container.appendChild(content);
    }
  }
    //function playerChoice() {
      //let choice = prompt("Are you playing rock, paper, or scissors");
      //if (choice === null) {
      //  playerChoice();
      //}
     // return choice;
    //}


