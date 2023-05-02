#!/usr/bin/env node

//Determine wether the sentiment of text is positive or negative
//use a web service
//http://text-processing.com/api/sentiment/
async function getSentiment(text) {
    const url = "http://text-processing.com/api/sentiment/";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `text=${text}`
    }
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
            return data;
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

// Test
getSentiment("I love you").then(data => console.log(data));