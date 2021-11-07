var obj = {
  target: 'div'
}

/**
 * @usecase: keep this for obj
 */
function logTarget(event, name) {
  console.log(event)
  console.log(name)
  console.log(this)
  console.log('target: ', this.target)
  //direct use
  //console.log('target: ', obj.target)
}

logTarget('click','quang')

/**
 * @bind
 */
console.log('Using bind...')
var buildTarget = logTarget.bind(obj)
buildTarget('click','quang')

/**
 * @call
 */
console.log('Using call...')
logTarget.call(obj,'click','quang')

/**
 * @apply
 */
console.log('Using apply...')
logTarget.apply(obj,['click','quang'])


