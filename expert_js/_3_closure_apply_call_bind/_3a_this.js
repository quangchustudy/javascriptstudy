/**
 * # THIS: Each func has access to this variable
 * - if fun in GEC: "this" points to the global obj
 * - if fun in an obj: "this" points to that "obj"
 * - "this" points to the env where the fun is sitting
 */

/**
 * CASE 1:
 * - checkout: test() vs obj.objTest()
 */
//fun on GEC
function test() {
  console.log('this:', this);
}

//fun on OBJ
var obj = {
  name: 'object',
  objTest: function () {
    console.log('this:', this);
  }
};

