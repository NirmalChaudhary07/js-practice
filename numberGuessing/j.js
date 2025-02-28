// const num = (Math.random()*100+1).toFixed();

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField')

// const guessSlot =document.querySelector('.guesses');
// const lastResult =document.querySelector('.lastResult')

// const loworhigh = document.querySelector('.lowOrHi')
// const startOver = document.querySelector('.resultParas')

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess =1;
// let playGame =true;

// if(playGame)
// {
//     submit.addEventListener('click',function(e)
// {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
    
// })
// }

// function validateGuess(guess)
// {
//     if(isNaN(guess))
//     {
//         alert('please enter a valid number');
//     }else if(guess <1)
//     {
//         alert('please enter a value greater than 1');
//     }else if(guess >100)
//     {
//         alert('please enter a number less than 100');
//     }
//     else{
//         prevGuess.push(guess);
//         if(numGuess === 11)
//         {
//             displayGuess(guess);
//             displayMessage(`game over random number is ${num}`);
//         }
//         else{
//             displayGuess(guess);
//             checkGuess(guess);
//         }
//     }
// }

// function checkGuess(guess)
// {
//     if(guess === num)
//     {
//         displayGuess(guess);
//         displayMessage(`you won a game ${num}`);
//         endGame();
//     }
//     else if(guess <num){
//         displayMessage(`number is too low`);
//     }
//     else if(guess >num)
//     {
//         displayMessage(`too high`);
//     }
//     else{
//         prevGuess.push(guess);
//         if(numGuess ===11)
//         {
//             displayGuess(guess);
//             displayMessage(`game over, random number is ${num}`)
//             endGame();
//         }
//         else {
//             displayGuess(guess);
//             checkGuess(guess);
//           }
//     }

// }
// function displayGuess(guess)
// {
//     userInput.value ='';
//     guessSlot.innerHTML +=`${guess}  `;
//     numGuess++;
//     lastResult.innerHTML = `${11 - numGuess}`


// }
// function displayMessage(message)
// {
//     loworhigh.innerHTML =  `<h2>${message}</h2>`;
// }

// function newGame()
// {
//     const newGamebutton = document.querySelector('#newgame');
//     newGamebutton.addEventListener('click',function(e){
//         let randNum=(Math.random()*100+1).toFixed();
//         prevGuess =[];
//         numGuess=1;
//         guessSlot.innerHTML ='';
//         lastResult.innerHTML =`${11-numGuess}`
//         userInput.removeAttribute('disabled')
//         startOver.removeChild(p);
//         playGame =true;
//     })

// }

// function endGame()
// {
//     userInput.value ='';
//     userInput.setAttribute('disabled','');
//     p.classList.add('button');
//     p.innerHTML=`<h2 id="newgame">start new game</h2>`;
//     startOver.appendChild(p);
//     playGame =false;
//     newGame();
// }

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}