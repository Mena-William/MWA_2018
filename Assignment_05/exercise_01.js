var express = require("express");
var fetch = require('node-fetch');
var app = express();

// handling any request 
// app.get("*", (request, response) => {
//     response.end("End of response");
// });

// users middleware 
app.use('/users', (request, response, next) => {
    //response.send("this is from users middleware");

    //Promises(response); // promises
    //Observables(response); // observables
    Aysnc(response); // async and await
});

// using async await
async function Aysnc(response) {
    const result = await fetch('http://jsonplaceholder.typicode.com/users/');
    const json = await result.json();
    response.send(json);
}

// using observables
function Observables(response) {

    const promise = fetch('http://jsonplaceholder.typicode.com/users/')
        .then(res => res.json()).then(json => json);

    // using observables
    const {from} = require('rxjs');
    from(promise).subscribe((x) => {
        response.send(x);
    });
}

// using promises
function Promises(response)
{
    const promise = fetch('http://jsonplaceholder.typicode.com/users/');
    promise.then(res => res.json())
    .then(json => response.send(json));
}

//////////////////////////////////////// Express configuration
app.listen("8888", () => {
    console.log("listening to 8888");
});

app.disable('x-powered-by');
app.enable('strict mode');
app.enable('case sensetive routing');