// 'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = 'NOT A NUMBER INSERTED';
    } else if (guess === number) {
      
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      displayMessage('CORRECT!!!!!!');
      document.querySelector(".number").textContent = guess;

      if (score >= highscore) {
        console.log("heyy")
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== number) {

      score--;
      guess < number ? displayMessage('GUESS A BIT TOO LOW') : displayMessage('GUESS IS A BIT TOO HIGH');
      document.querySelector(".score").textContent = score;
     
    }
  } else{
    displayMessage("GAME OVER!!");
  }
});

document.querySelector(".again").addEventListener('click', function () {
    number = Math.trunc(Math.random()*20 + 1);
    document.querySelector(".number").textContent = "?";
    score = 20;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").style.width = "15rem";
    displayMessage("Start Guessing");
    document.querySelector("body").style.backgroundColor = "#222";
})
