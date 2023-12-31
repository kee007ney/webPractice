// Imports
const express = require('express');
const app = express();
const port = 5000;

// Listen on port
app.listen(port);//, () => console.info(`App listening on port ${port}`));
// Static files
app.use(express.static('public'));

// Set views
app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
     res.sendFile(__dirname + '/views/index.html');
 //    res.sendFile(__dirname + '/public/css/main.css');
//     res.sendFile(__dirname + '/public/js/main.js');
});

//const http = require('http');
//const fs = require('fs');

/*
const server = http.createServer((req,res) => {
     res.writeHead(200, {'content-type': 'text/html'});
     fs.createReadStream('index.html').pipe(res);

     res.writeHead(200, {'content-type': 'text/css'});
     fs.createReadStream('src/main.css').pipe(res);

     res.writeHead(200, {'content-type': 'text/javascript'});
     fs.createReadStream('src/main.js').pipe(res);

})

server.listen(process.env.PORT || 3000);
*/

/*
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('index.html');

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/

/*
var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname + 'src')); //Serves resources from public folder


var server = app.listen(5000);
*/

