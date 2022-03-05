console.log("Promise hell...")

const BASE_URL = 'https://dummyapi.io/data/v1'
const APP_ID = '615816d58953ce41b8af5741'

function flex(url) {
  console.log(`running flex...`)
  const apiPromise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(`GET`,url);
    xhr.setRequestHeader(`app-id`,APP_ID);

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

flex(`${BASE_URL}/user`)
  .then((response) => {
    console.log(`request is done...`);
    const parseResponse = JSON.parse(response);
    console.log(`users: `, parseResponse);
    const userId = parseResponse.data[0].id;
    console.log(`first user Id: `, userId);
    //promise hell
    return flex(`${BASE_URL}/user/${userId}`);
  })
  .then(response => {
    const parseResponse = JSON.parse(response);
    console.log(`user profile: `, parseResponse);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => console.log("all done, moving on....."))

console.log(`promise has been invoked, moving on`);
