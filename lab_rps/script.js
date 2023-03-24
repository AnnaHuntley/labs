
let userWins = 0;
let computerWins = 0;

for (let i = 0; i < 3; i++) {
  // get user choice
  let userChoice = prompt("Choose rock, paper, or scissors:");

  // get computer choice
  let computerChoice = Math.random();
  if (computerChoice < 0.33) {
    computerChoice = "rock";
  } else if (computerChoice < 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  // compare choices and determine winner
  if (userChoice === computerChoice) {
    alert("It's a tie!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    alert("You win!");
    userWins++;
  } else {
    alert("You lose!");
    computerWins++;
  }

  // check if user has won 3 times
  if (userWins === 3) {
    alert("Congratulations, you won the game!");
    break;
  }
}
