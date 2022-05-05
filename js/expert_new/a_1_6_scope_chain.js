/**
 * @description: SCOPE CHAIN
 * @type {string}
 * @output: check it
 * green
 * foo
 */
var color = 'red';
var name = 'foo';

function first() {
  var color = 'green';
  console.log(color);

  function second() {
    console.log(name);
  }

  second();
}

first();
