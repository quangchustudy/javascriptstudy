console.log("Async XHR hell...")

const BASE_URL = 'https://dummyapi.io/data/v1'
const APP_ID = '615816d58953ce41b8af5741'

function flex(url) {
  const apiPromise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(`GET`,url);
    xhr.setRequestHeader('app-id', APP_ID);

    //onload
    xhr.onload = () => {
      if(xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        })
      }
    }

    //onerror
    xhr.onerror = () => {
      reject({
        status: xhr.status,
        statusText: xhr.statusText,
      })
    }
    //send
    xhr.send();
  })
  return apiPromise;
}

async function getFirstUserDetail() {
  const response = await flex(`${BASE_URL}/user`);
  console.log(response);
  const parseResponse = JSON.parse(response);
  const userId = parseResponse.data[0].id;
  const userProfileResponse = await flex(`${BASE_URL}/user/${userId}`);
  console.log(JSON.parse(userProfileResponse));

}

async function getFirstUsersDetail() {
  const response = await flex(`${BASE_URL}/user`);
  const parsedResponse = JSON.parse(response);
  const userProfileRequests = [];
  for(let i = 0; i<5;i++) {
    const userId = parsedResponse.data[i].id;
    userProfileRequests.push(flex(`${BASE_URL}/user/${userId}`));
  }

  Promise.all(userProfileRequests)
    .then(usersResponse => {
      console.log(usersResponse);
    })
    .catch(error => console.log(error, error.status, error.statusText));
}

getFirstUsersDetail();
