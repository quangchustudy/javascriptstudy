var person = {
  firstName: 'Jane',
  lastName: 'Doe',
}

console.log('Hello, my name is ' + person.firstName +
' ' + person.lastName) ;

/**
 * CASE 1: template strings
 */
console.log(`Hello, my name is ${person.firstName} ${person.lastName}`);
