/**
 * # HOISTING
 * - is nothing but the setup phase, required before the code executed
 */

/**
 * CASE 1: foo, I am b
 * - Hoisting: allocate space for var a; load fun b in memory
 * - Execution: assign value of foo to var a; invoke b function
 */
var a = 'foo';

function b() {
  console.log('I am b!');
}

console.log(a);
b();

/**
 * CASE 2:  undefined, 'I am b'
 * Undefined: whether a var doesn't exist or no value has been
 * assigned to that var
 */

console.log(a2);
b2();
var a2 = 'foo';

function b2() {
  console.log('I am b!');
}

/**
 * CASE 3:  undefined, 'I am b'
 */

var a3;
console.log(a3);
b3();
a3 = 'foo';

function b3() {
  console.log('I am b!');
}

/**
 * CASE 4:  error, var a4 is not defined at ...
 * means that JS does not know this var a4 at all
 */

//var a4;
console.log(a4);
b4();
a4 = 'foo';

function b4() {
  console.log('I am b!');
}
