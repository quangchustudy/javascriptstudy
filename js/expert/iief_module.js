/**
 * @module
 * @type {{incrementScore: incrementScore, getScore: getScore, playerId: number}}
 * @desciption: viết một module game khởi tạo điểm lúc bắt đầu game = 0, và có hàm tăng điểm và xem điểm hiện tại
 */

var game = (function startGame() {
  console.log("started...")
  //score
  var score = 0;
  //increment score
  function incrementScore() {
    score++;
  }
  //getscore
  function getScore() {
    console.log(score)
  }
  var playerId = Math.floor(Math.random()*100);

  return {
    incrementScore: incrementScore,
    getScore: getScore,
    playerId: playerId,
  }
})();

//Module is different with obj. Take a look at es6_arrow.js
