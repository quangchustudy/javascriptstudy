/**
 * # ES6 create classes in new way
 * - checkout: check "watch" obj and "sw" obj to see
 */
class Watch {
  constructor(options) {
    this.brand = options.brand;
  }

  time() {
    console.log(new Date(Date.now()).toLocaleString());
  }
}

class SmartWatch extends Watch {
  constructor(options) {
    super(options);
    this.type = 'smart';
  }

  steps() {
    console.log(Math.floor(Math.random()* 1000));
  }
}

const watch = new Watch({brand: 'analog'});
console.log(watch);
console.log(watch.brand);
console.log(watch.time());

const sw = new SmartWatch({brand: 'samsung'});
console.log(sw);
console.log(sw.brand);
console.log(sw.time());
console.log(sw.steps());
