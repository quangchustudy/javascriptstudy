/**
 * OBJ
 */
const obj = {
  firstName: 'Quang',
  lastName: 'Chu',
  age: 38,
  location: 'HCM',
}

const func = (obj) => {
  const name = `${obj.firstName} ${obj.lastName}`;
  console.log(name);
}

const funcDestruct = ({firstName,lastName}) => {//must match the key
  console.log(`${firstName} ${lastName}`)
}

func(obj);
funcDestruct(obj);

/**
 * OBJ REST OPERATOR
 */

const funcRestObj = ({firstName,lastName,...misc}) => {
  console.log(`${firstName} ${lastName}`);
  console.log(misc);
}

funcRestObj(obj);

/**
 * ARRAY
 */
const arr = ['Quang','Chu',38,'HCM'];

const funcArr = (arr) => {
  const name = `${arr[0]} ${arr[1]}`;
  console.log(name);
}

const funcArrDestruct = ([fname,lname]) => {//position same array
  console.log(`${fname} ${lname}`)
}
funcArr(arr);
funcArrDestruct(arr);

/**
 * REST OPERATOR ARRAY
 */
const funcRestOperator = ([fname,lname,...misc]) => {
  console.log(`${fname} ${lname}`);
  console.log(misc);
}

funcRestOperator(arr);
