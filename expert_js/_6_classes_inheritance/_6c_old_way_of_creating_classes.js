/**
 * # OLD WAY CREATE CLASSES BEFORE ES6
 */
//Watch
function Watch(options) {
  this.brand = options.brand;
}

Watch.prototype.time = function () {
  console.log(new Date(Date.now()).toLocaleString());
}

const watch = new Watch({brand: "analog"});
console.log(watch);
console.log(watch.brand);
console.log(watch.time());

/**
 * # OLD WAY CREATE CLASSES BEFORE ES6
 */
//Smart Watch
function SmartWatch(options) {
  this.type = 'smart';
}

SmartWatch.prototype.steps = function () {
  console.log(Math.floor(Math.random()* 1000));
}

const sw = new SmartWatch({brand: "apple"});
console.log(sw);
console.log(sw.steps());
console.log(sw.brand);
//console.log(sw.time());

/**
 * # OLD WAY CREATE CLASSES BEFORE ES6
 * - Fix error
 * - Checkout: check SmartWatch and SmartWatch2 to see
 * prototype chain
 */
//Smart Watch
function SmartWatch2(options) {
  Watch.call(this, options);//this for inheritance for props
  this.type = 'smart';
}
//ugly lines: inheritance for methods
SmartWatch2.prototype = Object.create(Watch.prototype);
SmartWatch2.prototype.constructor = SmartWatch2;

SmartWatch2.prototype.steps = function () {
  console.log(Math.floor(Math.random()* 1000));
}

const sw2 = new SmartWatch2({brand: "apple"});
console.log(sw2);
console.log(sw2.steps());
console.log(sw2.brand);
console.log(sw2.time());

