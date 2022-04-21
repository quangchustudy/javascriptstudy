var i = 0;
console.log(i);
function testSetInterval() {
  console.log(i);
  setInterval(
    (i=1) => {
      console.log(i);
    },
    1000
  );
  i++
}
// setInterval(
//   (i) => {
//     console.log(i);
//     i++;
//   },
//   1000
// )
testSetInterval();
