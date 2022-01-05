let p1Btn = document.querySelector('.player1-fire');
let p2Btn = document.querySelector('.player2-fire');

let p1Health = document.querySelector('.player1-health');
let p2Health = document.querySelector('.player2-health');

let player1Score = document.querySelector(".score-1");
let player2Score = document.querySelector(".score-2");

// let gameOver = document.querySelector('.game-over')
let p1Score = 100;
let p2Score = 100;

let p1Won = 0;
let p2Won = 0;

function gameOver(winner) {
  let winnerText = document.createElement("div");
  winnerText.classList.add("game-over");
  let text = document.createTextNode(winner);
  winnerText.appendChild(text);
  document.body.appendChild(winnerText);

  let gameOverAnimation = document.createElement("div");
  gameOverAnimation.classList.add("ball-2");
  document.body.appendChild(gameOverAnimation);
}

// for player one 
p1Btn.addEventListener('click', function() {
    let ball = document.createElement("div");
    ball.classList.add("ball-1");
    ball.classList.add("ball-animate");
    document.body.appendChild(ball);

    setTimeout(function() {
      ball.remove();
      p2Health.value -= 5;
      
      if(p2Health.value === 0){
        p1Won += 1;
        p2Health.value = 100;
        player1Score.innerHTML = p1Won;
      }

      if(p1Won === 3){
        gameOver("Player-1 Won");
      }
      else if(p2Won === 3) {
        gameOver("player-2 Won");
      }
    }, 1000)
})

// for player two
p2Btn.addEventListener('click', function() {
    let ball = document.createElement("div");
    ball.classList.add("ball-2");
    // ball.classList.add("ball-animate");
    document.body.appendChild(ball);

    setTimeout(function() {
      ball.remove();
      p1Health.value -= 5;


      if(p1Health.value === 0){
        p2Won += 1;
        p1Health.value = 100;
        player2Score.innerHTML = p2Won;
      }

      if(p1Won === 3){
        gameOver("Player-1 Won");
      }
      else if(p2Won === 3) {
        gameOver("Player-2 Won");
      }
      
    }, 1000)
    
    

})