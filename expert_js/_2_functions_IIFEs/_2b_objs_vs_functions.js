/**
 * OBJs vs Funs
 * - They can have props and methods just like other objs
 * - Have additional props such as their name and code (which
 * can be invoked)
 * - Can be assigned or passed around
 */

/**
 * CASE 1
 * @checkout: greetings, greetings(), {greetings}, greetings.type,
 * greetings['type']
 * @output: find the type:"simple"
 */
const greetings = function () {
  console.log('greetings!');
}

greetings.type = 'simple';
console.log(greetings.hasOwnProperty('type'));
console.log(greetings.hasOwnProperty('name'));//always
console.log(greetings.hasOwnProperty('age'));
