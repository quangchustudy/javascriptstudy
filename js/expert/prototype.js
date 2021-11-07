console.log('Prototype...')

/**
 * @overview: prototype and prototype chain
 * @description: __proto__.proto__.proto__
 * Prototypes are the mechanism by which JS objs inherit features from on another
 * Everything is an Object
 * @type {{name: string}}
 */

const obj = {
  name: 'Quang'
}

const arr = [1,2,3]

/**
 * @classByOldWay
 */

function Person (name, age) {
  this.name = name;
  this.age = age;
  // this.getInfo = function () {
  //   console.log(`Name: ${this.name}, Age: ${this.age}`)
  // }
}

const p1 = new Person('Quang',36);
const p2 = new Person('Thuy', 36);

/**
 * @avoidDuplicatingFunc
 */

Person.prototype.getInfo = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}`)
}

const arrNew = [];
console.log(arrNew[0])
Array.prototype.first = function () {
  if(this.length) {
    console.log(`the first element is ${this[0]}`)
  } else {
    console.error(`the array is empty :(`)
  }
}
