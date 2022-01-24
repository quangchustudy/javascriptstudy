/**
 * @description: try with var
 * @type {string}
 */
// var x = 'x';
//
// function makeFunc() {
//   var x = 'x2';
//   console.log(x);
//   if(true) {
//     var x = 'x3';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// makeFunc();
// console.log(x);

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
