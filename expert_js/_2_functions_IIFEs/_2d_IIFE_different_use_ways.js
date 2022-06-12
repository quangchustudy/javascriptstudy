/**
 * # WHY IIFE:
 * - Prevent the global namespace from polluting in case a function
 * is not required again
 * - Keep the vars required by the function to stay
 * enclosed within the ()
 */

/**
 * CASE 1: return but can't get from the window console
 */
(function startGame() {
  console.log('started..');
  //generate playerId
  return Math.floor(Math.random()*100);
})();

/**
 * CASE 2: return playerId via var
 * @checkout: playerId, window (see the playerId)
 */
var playerId2 = (function startGame2() {
  console.log('started2..');
  //generate playerId2
  return Math.floor(Math.random()*100);
})();

/**
 * CASE 2: return an obj like SETUP AN MODULE
 * @checkout: game (see playerId and incrementScore: f)
 * game.incrementScore(), game.getScore()
 */
var game = (function startGame2() {
  console.log('started3..');
  //score
  var score = 0;

  //increment score
  function incrementScore() {
    score++;
  }

  function getScore() {
    return score;
  }
  //generate playerId2
  var playerId3 = Math.floor(Math.random()*100);

  return {
    incrementScore: incrementScore,
    playerId3: playerId3,
    getScore: getScore,
  }
})();
