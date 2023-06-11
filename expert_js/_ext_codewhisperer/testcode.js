/*create a function that  takes in an array of numbers and returns the sum of the numbers.*/
// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

/*delcare a const BASE_URL with dummyapi.io and a const APP_ID with the id string*/
const BASE_URL = "https://dummyapi.io/data/v1";
const APP_ID = "615816d58953ce41b8af5741";

/*create an options object with method is GET and headers with the APP_ID*/
const options = {
    method: "GET",
    headers: {
        "app-id": APP_ID
    }
}

/*create a function that takes in a url and fetch data from the url with the options object and if the response is ok then return the json data else return a Promise reject with status is response status and statusText is response statusText and any remaining error then catch and log to the console*/
async function fetchData(url) {
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject({
                status: response.status,
                statusText: response.statusText
            });
        }
    } catch (error) {
        console.log(error);
    }
}

/*create a function that get userData from the fetchData function if it's ok then log userData to the console and then get the firstId from the userData then get firstUserData from the fetchData function if it's ok then log firstUserData to the console 
then get five first IDs from the userData then get five users' data from the fetchData function parallelly then log to the console
*/
async function getData() {
    try {
        const userData = await fetchData(`${BASE_URL}/user?limit=10`);
        console.log(userData);
        const firstId = userData.data[0].id;
        const firstUserData = await fetchData(`${BASE_URL}/user/${firstId}`);
        console.log(firstUserData);
        const fiveFirstIds = userData.data.slice(0, 5).map(user => user.id);
        const fiveFirstUserData = await Promise.all(fiveFirstIds.map(id => fetchData(`${BASE_URL}/user/${id}`)));
        console.log(fiveFirstUserData);
    } catch (error) {
        console.log(error);
    }
}

getData();


