/**
 * # VAR vs CONST vs LET
 */

/**
 * CASE 1: Var
 * output: 1,2,2
 */
function logVars() {
  var x = 1;
  console.log(x);

  if (true) {
    var x = 2;
    console.log(x);
  }

  console.log(x);
}

logVars();

/**
 * CASE 2: let - block scope {}
 * output: 1,2,1
 */
function logVars2() {
  var x = 1;
  console.log(x);

  if (true) {
    let x = 2;// fix here
    console.log(x);
  }

  console.log(x);
}

logVars2();

/**
 * CASE 3: const
 * output: 1,2,1
 */
function logVars2() {
  const x = 1;
  console.log(x);

  if (true) {
    let x = 2;// fix here
    console.log(x);
  }
  x = 3; //error here
  console.log(x);
}

logVars2();

