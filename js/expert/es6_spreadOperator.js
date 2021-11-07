/**
 * @overview: Spread operator
 * @description: (...) allows an iterable such as an array expression or string to be
 * expanded in places where zero or more arguments or elements expected, or
 * an obj expression to be expanded in places where zero or more key-value pairs are
 * expected.
 */
/**
 * @setup
 */
const args = [1,2,3]
const args2 = [4,5,6]

const obj = {
  firstName: 'Quang',
  lastName: 'Chu',
  age: 36,
  location: 'Vn'
}

const obj2 = {
  country: 'Canada'
}

const sum = (a,b,c) => a+b+c;

console.log(sum(...args))

const test = [...args,...args2]
const test1 = [...args2];
const test2 = args2;

console.log({...obj,...obj2})
