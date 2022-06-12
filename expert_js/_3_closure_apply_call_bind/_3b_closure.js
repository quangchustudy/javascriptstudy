/**
 * # CLOSURE
 * - Anytime u create a func within an another func u created
 * a closure
 * - Closure provides access to the vars func needs from the
 * enclosing func even after the enclosing func has finished
 * executing
 * - The inner func along with the vars stored in mem for a
 * later used form the "closure"
 */

/**
 * Case 1: still print out the 'Pearson' even var name out of scope
 * Why ? Because of Closure
 * - checkout: func()
 */

function makeFunc() {
  var name = 'Pearson';
  function displayName() {
    console.log(name);
  }
  console.log('makeFunc is done executing -- returning');
  return displayName;
}

var func = makeFunc();

/**
 * Case 2:
 * - checkout: closure has access to vars it requires from the
 * enclosing function, it actually has access to funs in it
 * and has access to global
 * - Global is always accessible
 * - Inspect: via {func2} and check [[Scopes]]
 */
var amIGlobal = window === this;

function makeFunc2() {
  var name = 'Pearson';
  function displayName() {
    var x = 'within displayName()';
    console.log(amIGlobal);
    console.log(name);
    console.log(x);
  }
  console.log('makeFunc2 is done executing -- returning');
  return displayName;
}

var func2 = makeFunc2();

/**
 * Case 2:
 * - checkout:
 */

function initPassword() {
  var password = 'test1234';
  return {
    verify: function (input) {
      if (input === password) {
        console.log(true);
      } else {
        console.log(false)
      }
    }
  }
}

var pwdUtils = initPassword();
pwdUtils.verify('secret');
pwdUtils.verify('test1234');
