const p1Btn = document.querySelector('.player1-fire');
const p2Btn = document.querySelector('.player2-fire');
const start = document.querySelector('.start');

const p1Health = document.querySelector('.player1-health');
const p2Health = document.querySelector('.player2-health');

const p1Power = document.querySelector('.p1-power');
const p2Power = document.querySelector('.p2-power');

const player1Score = document.querySelector(".score-1");
const player2Score = document.querySelector(".score-2");

// const gameOver = document.querySelector('.game-over')
let p2Score = 100;
let p1Score = 100;

let p1Won = 0;
let p2Won = 0;

let generateRandomPower = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

start.addEventListener("click", () => {
  const players = document.querySelectorAll('.player');
  players.forEach((player) => player.classList.remove('game-hidden'));
})

function restartGame() {
  p1Won = 0;
  player1Score.innerHTML = p1Won
  p2Won = 0;
  player2Score.innerHTML = p1Won
  p1Health.value = 100;
  p2Health.value = 100;
  document.querySelectorAll('.game-over').forEach((item) => item.remove());
  p1Btn.disabled = false;
  p2Btn.disabled = false;
}

function gameOver(winner) {
  const winnerText = document.createElement("div");
  winnerText.classList.add("game-over");
  const text = document.createTextNode(winner + "\nGame Over");
  winnerText.appendChild(text);
  document.body.appendChild(winnerText);

  p1Power.innerHTML = '';
  p2Power.innerHTML = '';

  p1Btn.disabled = true
  p2Btn.disabled = true
}

// for player one 
p1Btn.addEventListener('click', () => {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet-1");
    bullet.classList.add("bullet-animate");
    document.body.appendChild(bullet);

    setTimeout(function() {
      bullet.remove();
      let reduceHealthBy = generateRandomPower(5, 0);
      p2Health.value -= reduceHealthBy;
      p2Power.innerHTML = `-${reduceHealthBy}`;
      
      if(p2Health.value === 0){
        if (p1Won < 3) {
          p1Won += 1;
          p2Health.value = 100;
          player1Score.innerHTML = p1Won;
        }  
      }

      if(p1Won === 3){
        gameOver("Player-1 Won");
      }
      else if(p2Won === 3) {
        gameOver("player-2 Won");
      }
    }, 1000);
});

// for player two
p2Btn.addEventListener('click', () => {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet-2");
    document.body.appendChild(bullet);

    setTimeout(function() {
      bullet.remove();
      let reduceHealthBy = generateRandomPower(5, 0);
      p1Health.value -= reduceHealthBy;
      p1Power.innerHTML = `-${reduceHealthBy}`;
      
      if(p1Health.value === 0){
        if(p2Won < 3) {
          p2Won += 1;
          p1Health.value = 100;
          player2Score.innerHTML = p2Won;
        }
      }

      if(p2Won === 3){
        gameOver("Player-2 Won");
      }
      else if(p1Won === 3) {
        gameOver("Player-1 Won");
      }
      
    }, 1000);
});