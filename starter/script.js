// 'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = 'NOT A NUMBER INSERTED';
    } else if (guess === number) {
      
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector('.message').textContent = 'CORRECT!!!!!!';
    } else if (guess < number) {
      document.querySelector('.message').textContent = 'GUESS A BIT TOO LOW';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess > number) {
      document.querySelector('.message').textContent =
        'GUESS IS A BIT TOO HIGH';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else{
    document.querySelector(".message").textContent = "GAME OVER!!"
  }
});

document.querySelector(".again").addEventListener('click', function () {
    number = Math.trunc(Math.random()*20 + 1);
    document.querySelector(".number").textContent = "?";
    score = 20;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".message").textContent = "Start Guessing";
    document.querySelector("body").style.backgroundColor = "#222";
})
