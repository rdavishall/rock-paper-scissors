let humanScore = 0;
let cpuScore = 0;
const buttons = document.querySelectorAll('#human-weapons .btn');
const rotateImgs = document.querySelectorAll('#human-weapons img');
const restart = document.querySelector('.restart');
let cpuWeapons = document.getElementById("cpu-weapons");
let cpuButton = document.createElement("button");
let img = document.createElement("img");
console.log(restart);

// Random Computer Selection
let computerPlay = function () {
  let selectionArray = ["rock", "paper", "scissors"];
  let randInt = Math.floor(Math.random() * selectionArray.length);
  return selectionArray[randInt];
}

// Disable button 
function disableBtn() {
  buttons.forEach(button => button.disabled = true)
  rotateImgs.forEach(rotateImg => rotateImg.classList.add('noanimation'))
}

// Game Rules / Determine Winner
function playRound() {
  let computerSelection = computerPlay();
  // Using computer selection to create element and import image
  if (computerSelection === "rock") {
    img.src = "./img/rock.png";
    cpuWeapons.appendChild(cpuButton);
    cpuButton.appendChild(img);
  }
  else if (computerSelection === "paper") {
    img.src = "./img/paper.png";
    cpuWeapons.appendChild(cpuButton);
    cpuButton.appendChild(img);
  }
  else if (computerSelection === "scissors") {
    img.src = "./img/scissors.png";
    cpuWeapons.appendChild(cpuButton);
    cpuButton.appendChild(img);
  }
  let gameText = "";

  // Determine Winner
  if ((humanSelection === 'rock' && computerSelection === 'scissors') ||
    (humanSelection === 'paper' && computerSelection === 'rock') ||
    (humanSelection === 'scissors' && computerSelection === 'paper')) {
    humanScore++;
    // Set max games to 5 --> will need some type of reset
    if (humanScore === 5) {
      gameText = `Congrats you win ${humanScore} - ${cpuScore}`
      disableBtn();
    } else {
      gameText = `You win ${humanSelection} beats ${computerSelection}`;
    }
  }
  else if (humanSelection === computerSelection) {
    gameText = `Tie game`;
  }
  else {
    cpuScore++;
    if (cpuScore === 5) {
      gameText = `Sorry you lose ${cpuScore} - ${humanScore}`
      disableBtn();
    } else {
      gameText = `You lose ${computerSelection} beats ${humanSelection}`;
    }
  }

  // Add score and text into HTML document
  document.getElementById('human-score').textContent = humanScore;
  document.getElementById('cpu-score').textContent = cpuScore;
  document.getElementById('text-content').textContent = gameText;
}
// Select Human Choice with Click
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    humanSelection = button.id;
    playRound();
  })
})

// Rotate on click 
rotateImgs.forEach((rotateImg) => {
  rotateImg.addEventListener('click', () => {
    rotateImg.classList.add('spin');
    setTimeout(() => {
      rotateImg.classList.remove("spin")
    }, 500)
  })
})

// Restart Game
restart.addEventListener('click', () => {
  document.getElementById('human-score').textContent = 0;
  document.getElementById('cpu-score').textContent = 0;
  document.getElementById('text-content').textContent = "Rock Beats Scissors | Scissors Beats Paper | Paper Beats Rock"
  rotateImgs.forEach(rotateImg => rotateImg.classList.remove('noanimation'));
  img.remove();
  cpuButton.remove();
  humanScore = 0;
  cpuScore = 0;
  buttons.forEach(button => button.disabled = false);
})


