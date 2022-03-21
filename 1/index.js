// console.log("hello world");

// var http = require('http');

// console.log("Server is running");
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);

/* HTTP alternative Express.js */

// var fs = require('fs');

// fs.readFile('demofile.txt', 'utf8', function(err, data) {
//   if (err) throw err;
//   console.log(data);
// });

const express = require('express');
const app = express();

// API (Application Programming Interface)
app.get('/', function (req, res) {
  res.send('Hello World from /');
})
app.get('/abc', function (req, res) {
    res.send('Hello World from /abc');
});

// Express Methods
// get() - send data to frontend
// post() - send data to from frontend to backend (create new data).
// delete() - send data to from frontend to backend (delete).
// put() - send data to from frontend to backend (update).
// patch() - send data to from frontend to backend (few fields ko update).

app.listen(3000,(err) => {
    if(err) console.log(err);
    else console.log("Server is running");
},);