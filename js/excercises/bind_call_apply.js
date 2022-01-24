var objTest = {
  target: 'div',
}

function makeFunc() {
  console.log(this);
}

function objTestFunc(event, name) {
  console.log(this);
  console.log(event);
  console.log(name);
  console.log(this.target);
}

makeFunc();
// var objTestFuncTest = objTestFunc.bind(objTest);
// objTestFuncTest('click');
objTestFunc.bind(objTest)('click','quang');

//call
objTestFunc.call(objTest,'click','quang');

//apply
objTestFunc.apply(objTest,['click','hang'])
