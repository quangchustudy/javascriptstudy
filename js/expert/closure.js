/**
 * @overview: Anytime you create a func within an another func
 * => you have created a closure
 * @description:
 * - Closure provides access to the vars func needs from the enclosing func
 * even after the enclosing func has finished executing
 * - The inner func along with vars stored in memory for a later used form the "closure"
 */

console.log(
  'Starting Closure...'
)

/**
 * @example: example 1
 */

function initPassword() {
  var password = 'test1234!'
  return {
    verify: function (input) {
      if (input === password) {
        console.log(true)
      } else {
        console.log(false)
      }
    }
  }
}

var pwdUtils = initPassword();
pwdUtils.verify('secret');
pwdUtils.verify('test1234!')

/**
 * @example2: closure with variable scope
 * @description: chứng minh closue có thể truy cập vào biến inner scope, enclosing func và global
 */
var amIGlobal = window === this;

function makeFunc() {
  var name = 'Quang';
  function displayName() {
    var x = false;
    console.log(x); //inner func variable
    console.log(amIGlobal); //global variable
    console.log(name); //enclosing func variable
  }
  console.log('makeFunc - done executing')
  return displayName;
}

var displayNameFunc = makeFunc();
displayNameFunc();
//console.log(displayNameFunc());

/**
 * @example3: closure with param
 */
function createClosuresError() {
  console.log('Error case')
  for (var i=0; i<3; i++) {
    function closure() {
      console.log('i:',i)
    }
    setTimeout(closure,1000)
  }
}

function createClosures() {
  console.log('Fixed case')
  for (var i=0; i<3;i++) {
    (function (i) {
      function closure() {
        console.log('i:',i)
      }
      setTimeout(closure,1000)
    })(i)

  }
}
createClosuresError();
createClosures();

