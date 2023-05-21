/**
 * CASE: callback normal with setTimeout
 * - output: 2,1
 */
function first() {
  setTimeout(() => {
    console.log(1)
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

/**
 * CASE: callback fix
 * - output: 1,2
 */
function first2(callback) {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 500);
}

function second2() {
  console.log(2);
}

first2(second2);

console.log('another example');
const myPromise = new Promise((resolve, reject) => {
  const callback = () => {
    resolve('done');
  }
  setTimeout(callback, 1000);
  
})

myPromise.then(console.log);