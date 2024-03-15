document.onload;
window.onload;
let compImg = document.getElementById("compImg");
var userImg = document.getElementById("userImg");
let infoText = document.getElementById("infoText");
let userPrompt = prompt("Enter your username.");
let compChoice;

document.getElementById("userName").innerText = `${userPrompt}`;

function playRound(userChoice) {

  // set user choice im
 
  userImg.src = `${userChoice}.png`
  //getting comp choice
  let randomNumber = Math.floor(Math.random() * 3);

  console.log(userChoice);
  // setting comp choice to a string value
  if (randomNumber === 0) {
    compChoice = "rock";
    compImg.src = "rock.png";
  } else if (randomNumber === 1) {
    compChoice = "paper";
    compImg.src = "paper.png";
  } else {
    compChoice = "scissors";
    compImg.src = "scissors.png";
  }

  console.log(compChoice);

  //playing the game
  if (userChoice === compChoice) {
    infoText.innerHTML =
      '<h1 class="text-center">Its a TIE!</h1> <p class="text-center">No one has won, no one has lost. No one gets a point, this round did not count. Try again!</p>';
    

  } else if (userChoice === "rock" && compChoice === "paper" || userChoice === "paper" && compChoice === "scissors" || userChoice === "scissors" && compChoice === "rock") {
    infoText.innerHTML =
      '<h1 class="text-center">THE ROBOTS WIN</h1> <p class="text-center">Bow down to your new overlords!</p>';
    

  } else if (userChoice === "rock" && compChoice === "scissors") {
    infoText.innerHTML =
      '<h1 class="text-center"><span id="userName">User</span> has won!</h1> <p class="text-center">Score one for humanity!</p>';

  } else if (userChoice === "paper" && compChoice === "rock") {
    infoText.innerHTML =
      '<h1 class="text-center"><span id="userName">User</span> has won!</h1> <p class="text-center">Score one for humanity!</p>';

  

  } else if (userChoice === "scissors" && compChoice === "paper") {
    infoText.innerHTML =
      '<h1 class="text-center"><span id="userName">User</span> has won!</h1> <p class="text-center">Score one for humanity!</p>';
  }
}
