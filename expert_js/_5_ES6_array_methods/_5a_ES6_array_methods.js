/**
 * Anotomy of ES6 Array Methods
 * - array.method(callback);
 * - let callback = (currentValue, index, array) = {
 *   //do sth with the currentValue
 * }
 */

const teams = ['hcm','hn','danang'];
let callback = (currentValue, index, array) => {
  console.log(currentValue, index);
}
teams.forEach(callback);

teams.forEach(currentValue => console.log(currentValue));

teams.forEach(team => console.log(team));
