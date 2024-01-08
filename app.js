const express = require ('express');
const articleRouter = require ('./routes/articles');
const app = express();
const port = 5000;
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:28000/mydb";

/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
*/

          app.set ('view engine', 'ejs');
          app.set ('views', './views');

app.use ('/articles', articleRouter);
app.use (express.static ('public'));


app.get ('/', (req, res) => {
     const articles = [{
          title: 'Test Article',
          createdAt: new Date(),
          description: 'Test description'
     },
     {
          title: 'Test Article 2',
          createdAt: new Date(),
          description: 'Test description2'
     }]
     res.render ('index', {articles: articles });
})

app.listen(port, function (err) {
     if (err) throw err;
     console.info (`Listening on port ${port}`);
});