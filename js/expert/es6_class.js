console.log("Class...")

/**
 * @classByOldWay: via function
 * @param options
 * @constructor
 */

function  Watch(options) {
  this.brand = options.brand;
}

Watch.prototype.time = function () {
  console.log(new Date(Date.now()).toLocaleString());
}

function SmartWatch(options) {
  Watch.call(this,options)
  this.type = 'smart';
}

SmartWatch.prototype = Object.create(Watch.prototype) //copy prototype of Watch to SmartWatch
SmartWatch.prototype.constructor = SmartWatch //apply back SmartWatch again for constructor

SmartWatch.prototype.steps = function () {
  console.log(Math.floor(Math.random()*10000))
}

/**
 * @classByNewWay: via class
 */
class NewWatch {
  constructor(options) {
    this.brand = options.brand;
  }
  time() {
    console.log(new Date(Date.now()).toLocaleString())
  }
}

class NewSW extends NewWatch {
  constructor(options) {
    super(options); //Watch.call(this, options)
    this.type = 'smart'
  }
  steps() {
    console.log(Math.floor(Math.random()*10000))
  }
}
