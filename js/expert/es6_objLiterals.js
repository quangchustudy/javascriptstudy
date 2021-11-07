const firstName = 'Quang'
const lastName = 'Chu'
const age = 24
const city = 'HCM'
const KEY = 'car'

const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
  city: city,
  country: 'Vietnam',
  getAge: function () {
    return this.age
  }
}

const personEs6 = {
  firstName,
  lastName,
  age,
  city,
  country: 'Vietnam',
  getAge() {
    return this.age
  }, //getAge function
  get age() {
    return age
  }, //age getter
  get fullName() {
    return `${firstName} ${lastName}`
  }, //fullName getter and no need to invoke like invoke getAge func
  [KEY]: 'tesla' //dynamic key
}
