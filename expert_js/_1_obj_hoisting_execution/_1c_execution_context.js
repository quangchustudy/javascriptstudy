/**
 * # EXECUTION CONTEXT
 * - Is the environment in which JS code is executed
 * - Global Execution Context (default)
 * - Functional Execution Context
 */
var a = 'foo';

function b() {
  console.log('I am b!');
}

console.log(a);
b();

/**
 * Execution context: GEC: color, first(); First: color;
 * => green ; red
 */

var color = 'red';
function first() {
  var color = 'green';
  console.log(color);
}
first();
console.log(color);
