const teams = [
  {name: 'hcm', lastGame: 'Won'},
  {name: 'hn', lastGame: 'Lost'},
  {name: 'dn', lastGame: 'Won'},
];

const names = ['Quang', 'Thuy', 'Minh','Hieu','Hang','Quang','Thuy'];

const numbers = [0,1,2,3];

//sum
const sum = numbers.reduce((accumulater,currentValue) => {
  return accumulater + currentValue;
}, 1);
console.log(sum);

//count how many times the name appear in an array

const countName = names.reduce((accumulator, name) => {
  if(accumulator.hasOwnProperty(name)) {
    accumulator[name] +=1;
  } else {
    accumulator[name] = 1;
  }

  return accumulator;
}, {});

console.log(countName);
