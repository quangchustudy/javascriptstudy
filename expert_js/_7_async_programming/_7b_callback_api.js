console.log("Callback hell...")

const BASE_URL = 'https://dummyapi.io/data/v1'
const APP_ID = '615816d58953ce41b8af5741'

function xhrWithCallback(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET',url);
  xhr.setRequestHeader('app-id',APP_ID);

  //onload
  xhr.onload = () => {
    if(xhr.status == 200) {
      callback(xhr.response);
    } else {
      callback({}, {
        status: xhr.status,
        statusText: xhr.statusText,
      })
    }
  }

  //error
  xhr.onerror = () => {
    callback({}, {
      status: xhr.status,
      statusText: xhr.statusText,
    })
  }

  //send
  xhr.send();
}

function handleResponse(response, error) {
  console.log('request is done...');
  if (!error) {
    const  parseResponse = JSON.parse(response);
    console.log('user: ', parseResponse);
    const userId = parseResponse.data[0].id;
    console.log('first user Id: ', userId);
    //call user profile
    xhrWithCallback(`${BASE_URL}/user/${userId}`, function (response, error) {
      if(!error) {
        const parseResponse = JSON.parse(response);
        console.log(`user Profile: `, parseResponse);
      }
    })
  } else {
    console.log(`error`, error.status, error.statusText);
  }
}

xhrWithCallback(`${BASE_URL}/user`,handleResponse);
