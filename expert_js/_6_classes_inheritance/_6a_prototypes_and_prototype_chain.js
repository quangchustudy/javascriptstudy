/**
 * # PROTOTYPE ?
 * - A first, typical or preliminary model of sth,
 * especially a machine, from which other forms are
 * developed or copied
 *
 * # PROTOTYPE IN JS
 * - Prototypes are the mechanism by which JS objs inherit
 * features from one another
 *
 * # EVERYTHING IS AN OBJ IN JS
 */

const obj = {
  name: 'Quang',
}

const arr = [1,2,3];

console.log(obj.toString()); //where toString(), obj
//inherit from via __proto__ and check "obj" with __proto__
console.log(arr.toString());
console.log(arr.__proto__);
console.log(obj.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);
