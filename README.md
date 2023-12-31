Simple web app that converts JSON into formatted JSON. Draws heavily on:
https://raddy.dev/blog/nodejs-setup-with-html-css-js-ejs/ (node project stuff)
and
https://www.youtube.com/watch?app=desktop&v=s38oGpnnQo8 (html/css/js project stuff).

# Simple Web App using node.js
This project uses vanila JavaScript, CSS, and HTML to create a simple web page that takes JSON as input and produces formatted JSON as output.
It uses node.js as the server. To make this easier, it also uses express as the framework for everything.
As seems to be very common, the beginning of the app.js project (which is what's launched by the server) sets a variable for calling the express() function (`app`).
All of the express methods can then be called on `app`, like `.listen`, `.set`, `.get`, and `.use`.

`app.use` is used to set the place to get all the static files.
`app.set` is used to set the views and the view engine (ejs).

Rather than grabbing the about.html file (as is done with `app.get`), you could instead render index.ejs:

```
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})
```

Project structure in this repository should look like this:
   
📂 node_modules  
📂 public  
﹂ 📂 css  
﹂⎻  📜 main.css  
﹂ 📂 img  
﹂⎻  🖼 cat.jpg  
﹂ 📂 js   
﹂⎻  📜 script.js  
📂 views  
﹂ 🌍 about.ejs  
﹂ 🌍 index.ejs  
📜 README.md  
🌍 app.js  
📜 package-lock.json  
📜 package-json  

### To run:
1) Install express (application framework) and ejs (templating tool to generate html from plain JavaScript (view engine)):
`npm install express ejs`

2) Install nodemon (automatically restarts the node.js server whenever a change is saved in the project directory):
`npm install nodemon --save-dev`

3) Add this line to package.json:
`"start": "nodemon app.js"`
(Full JSON should look something like this):
```
{
  "name": "Learning NodeJS",
  "version": "1.0.0",
  "description": "NodeJS Tutorial",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ejs": "^3.1.3",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.4"
  }
}
```

4) Save everything and run it:
`npm start`

Navigate to http://localhost:5000 in your browser and you should be able to see the project.
Change the port in app.js (`const port = 5000`) to whatever you like if you prefer a different port number.
