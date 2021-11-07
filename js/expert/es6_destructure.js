console.log(`ES6 Destructuring...`)

/**
 * @overview: Destructuring an obj and Rest
 * @type {{firstName: string, lastName: string, location: string, age: number}}
 */

const obj = {
  firstName: 'Quang',
  lastName: 'Chu',
  age: 36,
  location: 'BT'
}

const func = (obj) => {
  const name = `${obj.firstName} ${obj.lastName}`
  console.log(name)
}

const funcEs6 = ({firstName, lastName,...rest}) => {
  console.log(firstName,lastName)
  console.log(rest)
}

const {firstName, lastName} = obj
console.log(firstName, lastName)

func(obj)
funcEs6(obj)

/**
 * @overview: Destructuring an Array and Rest
 */
const arr = ['Hang','Chu',26,'BT']
const funcArr = (arr) => {
  console.log(`${arr[0]} ${arr[1]}`)
}
const funcArrEs6 = ([first,last, ...rest]) => {
  console.log(first,last)
  console.log(rest)
}

funcArr(arr)
funcArrEs6(arr)
console.log(arr.values())
