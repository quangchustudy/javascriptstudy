/**
 * CASE: Normal class with funciton
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const p1 = new Person('John',25);
const p2 = new Person('Jane',30);
console.log(p1);
console.log(p2);
p1.getInfo();
p2.getInfo();

/**
 * CASE: Normal class with funciton
 * - move up getInfo to one proto level
 * - checkout: compare p1 and p3 to see where getInfo()
 */
function Person2(name, age) {
  this.name = name;
  this.age = age;
}

Person2.prototype.getInfo = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const p3 = new Person2('John2',25);
const p4 = new Person2('Jane2',30);
console.log(p3);
console.log(p4);
p3.getInfo();
p4.getInfo();

/**
 * CASE: extend array function
 * - Create a new funtion first() and extend it in Array proto
 */
const arr = [343,34,534];
const emptyArr = [];
console.log(arr[0])
Array.prototype.first = function () {
  if (this.length) {
    console.log(`the first element is ${this[0]}`);
  } else {
    console.error("array is empty");
  }
};

console.log(arr.first());
console.log(emptyArr.first());
