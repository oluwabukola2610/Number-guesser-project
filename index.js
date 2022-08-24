// GAME:FUNCTION
// - Player must guess a number between a min to max
// - player gets a certain amount of guesses 
// - notify player of guesses remaining
// - notify the player of the correct answer if loose
// - let player choose to play again.

//Games values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesleft = 3;

//create the ui element
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const messsage = document.querySelector('.message');

  //Assign min and max
  minNum.textContent = min;
  maxNum.textContent = max;

//   //add event listner for playagain
//   game.addEventListener('mousedown',function(e){
//   if (e.target.className === 'play-again') {
//     window.location.reload();
//   }
//   });

//add event listner for btn
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setmessage(`please enter a number between ${min} and ${max}`,'red');
    }

    //check if you win
    if (guess=== winningNum) {
       gameOver(true,`${winningNum} is correct! YOU WIN`)
        
    } else{
        guessesleft -= 1;
    }
//check if you loose 
    if (guessesleft===0) {
       gameOver(false,`you losser!!TRY AGAIN.The correct answer was ${winningNum}`,);
    } else {
        guessInput.style.borderColor = 'red';
        guessInput.value = ' ';
        setmessage(`${guess} is not correct, ${guessesleft} guessesLeft `,'red');
    }

    
});

    //ggame over
    function gameOver (won,msg){
        let color;
        won=== true? color = 'green' : color = 'red';
        guessInput.disabled = true;
        guessInput.style.borderColor = color;
        massage.style.color = color;
        setmessage(msg); 
    }

function setmessage(msg , color){
    messsage.textContent = msg;
    messsage.style.color = color;
}