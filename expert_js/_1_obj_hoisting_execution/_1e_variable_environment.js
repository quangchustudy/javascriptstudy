/**
 * # VARIABLE ENVIRONMENT
 * - Environment where the code is sitting,
 * not where it's invoked from
 */
/**
 * CASE 1:
 * - GEC: color(red), first ; FEC: color(green)
 * @output: green, red
 */
var color = 'red';

function first() {
  var color = 'green';
  console.log(color);
}

first();
console.log(color);

/**
 * CASE 2:
 * - GEC: color(red), first ; FEC: color(green)
 * @output: green, green
 */
var color2 = 'red';

function first2() {
  color2 = 'green';
  console.log(color2);
}

first2();
console.log(color2);

/**
 * CASE 3:
 * - GEC: color(red), first ; FEC: color(green)
 * @output: green, red, red
 */
var color3 = 'red';
function first3() {
  var color3 = 'green';
  console.log(color3);
  second3(); //invoke here but not where the code is sitting
}
function second3() {
  console.log(color3);//not found color3, so it jump to GEC
  //to find the var color3 and now color3 is red
}
first3();
console.log(color3);
