// import * as CONSTANTS from '../consts'
console.log("Async Fetch Api...")

const BASE_URL = 'https://dummyapi.io/data/v1'
const APP_ID = '615816d58953ce41b8af5741'

const options = {
  method: 'GET',
  headers: {
    'app-id': APP_ID
  }
}

function getData(url) {
  return fetch(url, options)
    .then(response => {
      //console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(
          {
            status: response.status,
            statusText: response.statusText
          }
        )
      }
    })
    .catch(error => console.log("Error:", error))
}

async function getUserDetails() {
  const responseData = await getData(`${BASE_URL}/user`)
  console.log(responseData)
  //Get first user data
  const firstId = responseData.data[0].id
  console.log("First ID: ", firstId)
  const firstUserData = await getData(`${BASE_URL}/user/${firstId}`)
  console.log("First User Data: ", firstUserData)
  //Get first five user data
  const userRequests = []
  for (let i=0; i<5; i++) {
    const userId = responseData.data[i].id
    // if(i===3 || i===4) {
    //   userRequests.push(getData(`${BASE_URL}/user/${userId}`))
    // } else {
      userRequests.push(getData(`${BASE_URL}/user/${userId}`))
    // }

  }
  console.log('userRequests: ',userRequests)
  return Promise.all(userRequests)
    // .then(data => console.log(data))
    // .catch(error => console.log("Error: ",error))

  //return firstUserData
}

async function processData() {
  const data = await getUserDetails()
  console.log('data:',data)
}

processData()



