console.log(`ES6 Array Methods...`)
/**
 * @overview: array.method(callback)
 * @description:
 * - let callback = (currentValue, index, array) => {
 *   //do sth with the currentValue
 *   console.log(currentValue)
 * }
 */
const teams = ['Quang','Thuy','Hang','Lai']

let callback = (currVal, index, arr) => {
  console.log(currVal, index)
}

teams.forEach(callback)
//es6
teams.forEach((currVal,index,arr) => {
  console.log(currVal,index)
})

/**
 * @overview: array.method(advance)
 */
const newTeams = [
  {name: 'Quang', lastGame: 'Won'},
  {name: 'Thuy', lastGame: 'Lost'},
  {name: 'Hang', lastGame: 'Won'},
]
//map
const mappedTeams = newTeams.map( team => {
  if (team.lastGame === 'Won') {
    team.score = 1
  } else {
    team.score = 0
  }
  return team
})

//new map
const mappedNewTeams = newTeams.map(team => {
  if (team.lastGame === 'Won') {
    return {...team,scoreNew:1}
  } else {
    return {...team,scoreNew:0}
  }
})
console.log(newTeams)
console.log(mappedTeams)
console.log(mappedNewTeams)

//filter
const winningTeams = newTeams.filter(team => team.lastGame === 'Won')
console.log('winding teams:',winningTeams)

//find
console.log(newTeams.find(team => team.name === 'Quang'))
console.log(newTeams.findIndex(team => team.name ==='Thuy'))

//reduce
const names = ['Quang','Thuy','Hang','Lai','Hieu','Quang','Thuy']

const testreduct = [1,2,3]


const result = {};
const test = names.reduce((acc,name) => {
  if(acc.hasOwnProperty(name)) {
    acc[name] += 1;
  } else {
    acc[name] = 1;
  }
  return acc
  //acc[name]++
  // return acc
}, {})
console.log(test)

const testchoi = testreduct.reduce((acc,curr) => acc + curr,1)
console.log(testchoi)
