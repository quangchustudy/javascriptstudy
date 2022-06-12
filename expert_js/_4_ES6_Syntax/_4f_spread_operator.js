/**
 * # SPREAD OPERATOR (...)
 * - allow an iterable such as array expression or string to be
 * expanded in places where zero or more arguments or elements
 * are expected, or an object expression to be expanded in places
 * where zero or more key-value pairs are expected
 */

const args = [1,2,3];
const args2 = [4,5,6];

const obj = {
  firstName: 'Quang',
  lastName: 'Chu',
  age: 38,
  location: 'HCM',
}

const obj2 = {
  country: 'Vietnam'
}

const sum = (a,b,c) => a+b+c;
sum(1,2,3);
//first spread
console.log(sum(...args));
console.log(sum(...args2));

//clone
const cloneArgs = [].concat(args);
console.log(cloneArgs);
const cloneArgsES6 = [...args];
console.log(cloneArgsES6);

//merge
const mergeArgs = [...args,...args2];
console.log(mergeArgs);

//clone obj
const cloneObj = {...obj};
console.log(cloneObj);

//merge obj
const mergeObjs = {...obj, ...obj2};
console.log(mergeObjs);
