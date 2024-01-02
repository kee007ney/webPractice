const express = require ('express');
const app = express();
const port = 5000;

app.listen (port, function (err) {
     if (err) console.log (err);
     console.info(`Listening on port ${port}`)});

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:28000/mydb";

/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
*/

app.use (express.static('public'));

app.set ('views', './views');
app.set ('view engine', 'ejs');

app.get ('/', (req, res) => {
     res.sendFile (__dirname + '/views/index.html');
})

console.log ("This is a test.");