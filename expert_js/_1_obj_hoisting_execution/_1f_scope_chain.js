/**
 * # SCOPE CHAIN:
 * - is a way to link all variables and functions that
 * current execution context has access to
 */

/**
 * CASE 1:
 * @output: green , foo
 */
var color = 'red';
var name = 'foo';

function first() {
  var color = 'green';
  console.log(color);

  function second() {
    console.log(name); //not found name, so it jump to
    //FEC first()
    //to find the var name and now name is foo
  }
  second();
}

first();

/**
 * CASE 2:
 * - GEC: color(red), first ; FEC: color(green)
 * @output: green, green, red
 */
var color2 = 'red';
function first2() {
  var color2 = 'green';
  console.log(color2);
  function second2() {
    console.log(color2);//not found color2, so it jump to
    // FEC2 first2()
    //to find the var color2 and now color2 is green
  }
  second2(); //invoke here but not where the code is sitting
}

first2();
console.log(color2);
