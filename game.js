// // GAME:FUNCTION
// // - Player must guess a number between a min to max
// // - player gets a certain amount of guesses
// // - notify player of guesses remaining
// // - notify the player of the correct answer if loose
// // - let player choose to play again.
//Games values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesleft = 3;

//create the ui element
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessInput = document.querySelector("#guess-input");
const guessBtn = document.querySelector("#guess-btn");
const messsage = document.querySelector(".message");

//Assign min and max
minNum.textContent = min;
maxNum.textContent = max;


  //add event listner for playagain
  game.addEventListener('mousedown',function(e){
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
  });


//add event listner for btn
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  
  if (guess === winningNum) {
    // check if won
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    setMessage(`${winningNum} is correct!! CONGRATULATION.`, "green");
    playAgain();
  } else {
    //check if lost
    if (guessesleft < 2) {
      guessInput.disabled = true;
      setMessage(
        `GAMEOVER you lost! ${winningNum} was the correct answer.`,
        "red"
      );
      guessInput.style.borderColor = "red";
      playAgain();
      // to check guesses left
    } else {
      guessesleft -= 1;
      setMessage(`${guess} is not correct,${guessesleft} ${guessesleft === 1 ? 'guess left' : 'guesses left'}`);
      guessInput.style.borderColor = "red";
      guessInput.value = "";
   
    }
  }
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`please enter a number between ${min} and ${max}`, "red");
  }
});

function setMessage(msg, color) {
  messsage.textContent = msg;
  messsage.style.color = color;
  messsage.style.borderColor = color;
}

function playAgain() {
  guessBtn.value = "Play Again";
  guessBtn.className = "play-again";
  guessInput.style.borderColor = "black";
}

