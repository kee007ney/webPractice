const express = require('express');
const app = (express());
const port = 5000;

app.listen(port);
app.use(express.static('public'));

app.set('views', '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
     res.sendFile(__dirname + '/views/index.html');
})