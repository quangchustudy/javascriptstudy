/**
 * # FUNCTION IN JS
 * - functions are first-class objects
 * - declaration or expression
 */

/**
 * CASE 1: Declaration
 */
function sayHi() {
  console.log("sayHi");
}
sayHi();

/**
 * CASE 2: Expression
 */

const sayHello = function () {
  console.log("sayHello");
}
sayHello();

const getName = function (gender) {
  return gender === 'male' ? 'John' : 'Jill';
}
const sayHiWithName = function (name) {
  console.log(`hi ${name}`)
}

const sayHiWithName2 = function (name) {
  console.log(`hi ${name('male')}`)
}

sayHiWithName('John');
sayHiWithName(getName('female'));
sayHiWithName2(getName);

/**
 * CASE 3: Expression
 */
const makeFunc = function () {
  return function () {
    console.log('Hola');
  }
}

const sayHola = makeFunc();
console.log(sayHola);
sayHola();
makeFunc()();
