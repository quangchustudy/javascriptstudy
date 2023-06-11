/**
 * create a function that takes an url string, then fetch url with options
 * if ok then return the response json
 * else return reject promise including status code and status text
 * else catch the error and log it to the console
 */
const fetchUrl = (url, options) => {
    return fetch(url, options)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject({
                    status: res.status,
                    statusText: res.statusText
                });
            }
        })
        .catch(err => {
            console.log(err);
        });
}

/**
 * create constant BASE_URL and set it to the 'https://dummyapi.io/data/v1/'
 * create constant APP_ID and set it to '615816d58953ce41b8af5741'
 * create constant options and set it to an object with method 'GET' and headers
 */
const BASE_URL = 'https://dummyapi.io/data/v1/';
const APP_ID = '615816d58953ce41b8af5741';
const options = {
    method: 'GET',
    headers: {
        'app-id': APP_ID
    }
}

/**
 * create async function to get user details sing fetchUrl function with limit is 10 and print to console the response data
 * if ok then get the first ID in the response data then use the fetchurl function to get user details with the ID and print to console
 * if ok then get the first five IDs in the resonse data then use the fetchUrl function to get the user details with the IDs and print to console
 * else catch the error and log to the console
 */
const getUserDetails = async () => {
    const response = await fetchUrl(`${BASE_URL}user?limit=10`, options);

        const userId = response.data[0].id;
        const userDetails = await fetchUrl(`${BASE_URL}user/${userId}`, options);
        console.log("user details");
        console.log(userDetails);
        const userIds = response.data.slice(0, 5).map(user => user.id);
        console.log(`user ids:  ${userIds.join(', ')}`);
        const usersDetails = await Promise.all(userIds.map(id => fetchUrl(`${BASE_URL}user/${id}`, options)));
        console.log(usersDetails);

}

getUserDetails();

