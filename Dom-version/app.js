let computerSelection;
let humanSelection;
let computerWins = 0;
let humanWins = 0;

// Random Computer Selection
let computerPlay = function () {
  let selectionArray = ["rock", "paper", "scissors"];
  let randInt = Math.floor(Math.random() * selectionArray.length);
  return selectionArray[randInt];
}

// Select Human Choice with Click
const buttons = document.querySelectorAll('.left-side .btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    humanSelection = button.id;
    console.log(humanSelection);
    computerSelection = computerPlay();
    console.log(computerSelection);
    playRound(humanSelection, computerSelection);
  })
})

// Play rock, paper scissors and for each win add one to total wins
let playRound = function (humanSelection, computerSelection) {
  if (humanSelection === "rock" && computerSelection === "scissors") {
    humanWins = humanWins + 1;
    console.log("Human Wins");
    return humanWins;
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    humanWins = humanWins + 1;
    console.log("Human Wins");
    return humanWins;
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanWins = humanWins + 1;
    console.log("Human Wins");
    return humanWins;
  } else if (humanSelection === "scissors" && computerSelection === "scissors") {
    console.log(`tie game`);
  } else if (humanSelection === "rock" && computerSelection === "rock") {
    console.log(`tie game`);
  } else if (humanSelection === "paper" && computerSelection === "paper") {
    console.log(`tie game`);
  } else if (humanSelection !== "rock" && humanSelection !== "scissors" && humanSelection !== "paper") {
    console.log("Invalid entry: please enter rock, paper or scissors");
  } else {
    computerWins = computerWins + 1;
    console.log("Computer Wins");
    return computerWins;
  }
}

