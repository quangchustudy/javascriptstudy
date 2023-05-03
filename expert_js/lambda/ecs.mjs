// given an array ['a','b','c'] then create a new array with [{name: 'a', count: 1}, {name: 'b', count: 1}, {name: 'c', count: 1]
// using map function
function countLetters(array) {
    return array.map((letter) => ({ name: letter, count: 1 }));
}

const arr = ['a', 'b', 'c'];
const new_arr = countLetters(arr);
console.log(new_arr);

// log to console all elements of new_arr
new_arr.forEach((element) => console.log(element));