console.log("CLOSURE EXERCISES.....");

/**
 * @Example1: checking password function
 */

function util() {
  var initPassword = 'test1234';
  return {
    verifyPassword: function (inputPassword) {
      console.log(inputPassword === initPassword ? true : false);
    }
  }
}

const util1 = new util();
util1.verifyPassword('abc');
util1.verifyPassword('test1234');

/**
 * @Example2: print inner/ global/ enclosing variables
 */

let global = "global";

function makeFunc() {
  let enclosing = "enclosing";
  function displayVariable() {
    let inner = "inner";
    console.log(inner);
    console.log(enclosing);
    console.log(global);
  }
  console.log("done makeFunc");
  return displayVariable;
}

const testFunc = makeFunc();
testFunc();

/**
 * @Example3: loop with timeout
 */
function closureWithError() {
  for(i=0; i<3; i++) {
    function loopTest() {
      console.log(i);
    };
    setTimeout(loopTest,1000);
  }
}

closureWithError();

/**
 * Example3: loop with ok
 */
function closureWithFix() {
  for (let i = 0; i < 3; i++) {
    (function loopTest(input) {
      console.log(input);
    })(i);
  }
}

closureWithFix();
