'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🚫 No Number!');
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('🎉 Correct Guess!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game =[');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  displayNumber('?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});

// const difference = Math.abs(guess - number);

// if (difference < 25) {
//   document.querySelector('.message').textContent = '🔥 getting hot';
// } else if (Math.abs(difference) < 50 && difference > 24) {
//   document.querySelector('.message').textContent = '🕯 getting warm';
// } else if (Math.abs(difference) < 75 && difference > 49) {
//   document.querySelector('.message').textContent = '🧊 getting cold';
// } else if (Math.abs(difference) < 100 && difference > 74) {
//   document.querySelector('.message').textContent = '☃ getting freezing';
// }

// 1 - 24 hot
// 25 - 49 warm
// 50 - 74 cold
// 75 - 99 freezing
