/**
 * @overview: Each function has access to this variable
 * @description:
 * - If function is in the global execution context, then this points to the
 * global obj
 * - If function is within an obj, then this points to that obj
 * @note: `this` points to the env where the func is sitting
 */

console.log("Starting This...")

function test() {
  console.log('this:', this)
}

var obj = {
  name: 'object',
  objTest: function () {
    console.log('this objTest:', this)
  }
}
