const firstName = 'Quang';
const lastName = 'Chu';
const age = 38;
const city = 'HCM';
const KEY = 'motorbike';

/**
 * CASE 1: normal case
 * @type {{firstName: string, lastName: string, country: string, getAge: (function(): number), city: string, age: number}}
 */
const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
  city: city,
  country: 'Vietnam',
  getAge: function () {
    return this.age;
  }
}
console.log(person);

/**
 * CASE 2: ES6 obj
 * - getter: get age() and get fullname()
 * @type {{firstName: string, lastName: string, country: string, getAge(): number|*, city: string, readonly fullName: string, readonly age: number}}
 */
const person2 = {
  firstName,
  lastName,
  age,
  city,
  country: 'Vietnam',
  getAge() { //person2.getAge()
    return this.age;
  },
  get age() { //person2.age === getter
    return age; //no this.age
  },
  get fullName() {
    return `${firstName} ${lastName}`
  }
}
console.log(person2);

/**
 * CASE 3: dynamic key
 * @type {{firstName: string, lastName: string, "[key]": string, city: string, age: number}}
 */
const person3 = {
  firstName,
  lastName,
  age,
  city,
  [KEY]: 'honda lead'
}
console.log(person3);
