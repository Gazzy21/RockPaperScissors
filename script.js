document.onload;
window.onload;

let userName = prompt("Enter your username.");

infoText = document.getElementById("infoText");
userImg = document.getElementById("userImg");
compImg = document.getElementById("compImg");

function playRound(userChoice) {
  //getting comp choice
  let randomNumber = Math.floor(Math.random() * 3);
  let compChoice;

  // setting comp choice to a string value
  if (randomNumber === 0) {
    compChoice = "rock";
    compImg.innerHTML =
      '<img src="rock.png" alt="" id="userImg" class="img-fluid compimg shadow-pop-br"/>';
  } else if (randomNumber === 1) {
    compChoice = "paper";
    compImg.innerHTML =
      '<img src="paper.png" alt="" id="userImg" class="img-fluid compimg shadow-pop-br"/>';
  } else if (randomNumber === 2) {
    compChoice = "scissors";
    compImg.innerHTML =
      '<img src="scissors.png" alt="" id="userImg" class="img-fluid compimg shadow-pop-br"/>';
  }

  console.log(compChoice);

  //playing the game
  if (userChoice === compChoice) {
    infoText.innerHTML =
      '<h1 class="text-center">Its a TIE!</h1> <p class="text-center">No one has won, no one has lost. No one gets a point, this round did not count. Try again!</p>';
  } else if (userChoice === "rock" && compChoice === "paper") {
    infoText.innerHTML =
      '<h1 class="text-center">THE ROBOTS WIN</h1> <p class="text-center">Bow down to your new overlords!</p>';
  } else if (userChoice === "rock" && compChoice === "scissors") {
    infoText.innerHTML =
      '<h1 class="text-center">`${userName}` has won!</h1> <p class="text-center">Score one for humanity!</p>';
  } else if (userChoice === "paper" && compChoice === "rock") {
    infoText.innerHTML =
      '<h1 class="text-center">`${userName}` has won!</h1> <p class="text-center">Score one for humanity!</p>';
  } else if (userChoice === "paper" && compChoice === "scissors") {
    infoText.innerHTML =
      '<h1 class="text-center">THE ROBOTS WIN</h1> <p class="text-center">Bow down to your new overlords!</p>';
  } else if (userChoice === "scissors" && compChoice === "rock") {
    infoText.innerHTML =
      '<h1 class="text-center">THE ROBOTS WIN</h1> <p class="text-center">Bow down to your new overlords!</p>';
  } else if (userChoice === "scissors" && compChoice === "paper") {
    infoText.innerHTML =
      '<h1 class="text-center">`${userName}` has won!</h1> <p class="text-center">Score one for humanity!</p>';
    // userImg.innerHTML =
    //   '<img src="scissors.png" alt="" id="userImg" class="img-fluid userimg shadow-pop-br"/>';
    // compImg.innerHTML =
    //   '<img src="paper.png" alt="" id="compImg" class="img-fluid compimg shadow-pop-br"/>';
    document.getElementById()
  }
}
