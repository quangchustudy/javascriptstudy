/**
 * # IIFE: Immediately Invoked Function Expression
 */

/**
 * CASE 1:
 * compare with invoke startGame() nomarlly.
 * @checkout: window
 * @output: can't see startGame function in global object
 * as invoke startGame() normally do
 */
(function startGame() {
  //init()
  console.log('started..');
})();
