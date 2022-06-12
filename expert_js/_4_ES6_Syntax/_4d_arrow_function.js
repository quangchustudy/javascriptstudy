/**
 * CASE 1: Normal case
 * @param a
 * @param b
 * @returns {*}
 */
function add(a,b) {
  return (a+b);
}

console.log(add(2,5));

/**
 * CASE 2:
 */

add2 = (a,b) => {
  return (a+b);
}
console.log(add2(2,4));

add3 = (a,b) => (a+b);
console.log(add3(2,6));

add4 = (a,b) => a + b;
console.log(add4(2,7));

add5 = a => a + 2;
console.log(add5(10));

sayHi = () => console.log('Hi');
sayHi();

