// Starting Conditions
let humanWins = 0;
let computerWins = 0;

// Randomlly Generate Computer Selection
let computerPlay = function () {
  // Possible Selections
  let selectionArray = ["rock", "paper", "scissors"];
  // Randomlly select number between 0 & 2
  let randInt = Math.floor(Math.random() * selectionArray.length);
  // Use selected number to pick the index of the array
  return selectionArray[randInt];
}

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
    console.log(`tie game`)
  } else if (humanSelection === "rock" && computerSelection === "rock") {
    console.log(`tie game`)
  } else if (humanSelection === "paper" && computerSelection === "paper") {
    console.log(`tie game`)
  } else if (humanSelection !== "rock" && humanSelection !== "scissors" && humanSelection !== "paper") {
    console.log("Invalid entry: please enter rock, paper or scissors");
  } else {
    computerWins = computerWins + 1;
    console.log("Computer Wins");
    return computerWins;
  }
}

// Round Test
// console.log(playRound("rock", computerPlay()));

// Keep playing while computer wins and human wins < 5
let game = function () {
  while (humanWins < 5 && computerWins < 5) {
    computerSelection = computerPlay();
    humanSelection = prompt("Enter rock, paper or scissors")
    humanSelection = humanSelection.toLowerCase();
    playRound(humanSelection, computerSelection);
    console.log(`Human wins: ${humanWins}`);
    console.log(`Computer wins: ${computerWins}`);
  }
};

let winnerMessage = function () {
  if (humanWins === 5) {
    console.log(`Human Wins The Game ${humanWins}:${computerWins}`)
  } else if (computerWins === 5) {
    console.log(`Computer Wins The Game ${computerWins}:${humanWins}`)
  }
}

game();
winnerMessage();
console.log(humanWins);
console.log(computerWins);
