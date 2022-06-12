/**
 *# APPLY CALL BIND methods
 */

/**
 * CASE 1: normal case
 */
var obj = {
  target: 'div',
}

function logTarget(event) {
  console.log(event);
  console.log('target:', this.target);//vs obj.target
}

logTarget('click');

/**
 * CASE 2: bind case
 */
var obj2 = {
  target: 'div',
}

function logTarget2(event) {
  console.log(event);
  console.log(this);
  console.log('target:', this.target);//vs obj.target
}

var boundTarget = logTarget2.bind(obj2);
boundTarget('click');

/**
 * CASE 3: call case
 */
var obj3 = {
  target: 'div',
}

function logTarget3(event) {
  console.log(event);
  console.log(this);
  console.log('target:', this.target);//vs obj.target
}

logTarget3.call(obj3, 'click 3');

/**
 * CASE 4: call case advance
 */
var obj4 = {
  target: 'div',
}

function logTarget4(event, name) {
  console.log(event);
  console.log(name);
  console.log(this);
  console.log('target:', this.target);//vs obj.target
}

logTarget4.call(obj,'click','Quang');

/**
 * CASE 5: apply case
 */
var obj5 = {
  target: 'div',
}

function logTarget5(event, name) {
  console.log(event);
  console.log(name);
  console.log(this);
  console.log('target:', this.target);//vs obj.target
}

logTarget4.apply(obj,['click apply','Quang']);
