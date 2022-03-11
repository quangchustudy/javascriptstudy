/**
 * @description: try with var
 * @type {string}
 */

/**
 * @description: try with let
 * @type {string}
 */

let x = 'x';

function makeFunc() {
  let x = 'x2';
  console.log(x);
  if(true) {
    let x = 'x3';
    console.log(x);
  }
  console.log(x);
}

makeFunc();
console.log(x);

var y = 'y';

function makeFuncY() {
  var y = 'y2';
  console.log(y);
  if(true) {
    var y = 'y3';
    console.log(y);
  }
  console.log(y);
}
makeFuncY();
console.log(y);
