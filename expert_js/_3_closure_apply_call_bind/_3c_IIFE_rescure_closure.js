/**
 *# IIFE come to rescure closure in some cases
 */

/**
 * CASE1: call closure with setTimeout
 * - Closure will take the latest "i" value from loop is 3
 */
function createClosure() {
  for (var i=0; i<3;i++) {
    function closure() {
      console.log('i:', i);
    }
    setTimeout(closure,1000); //output: 3,3,3
    //closure(); //output: 0,1,2
  }

  console.log('done creating closures');
}

createClosure();

/**
 * CASE2: IIFE come to rescure
 */
function createClosure2() {
  for (var j=0; j<3;j++) {
    (function (j) {
      function closure() {
        console.log('j:', j);
      }
      setTimeout(closure,1000);
    })(j);
  }

  console.log('done creating closures 2');
}

createClosure2();
