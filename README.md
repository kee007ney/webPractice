Template for basic web apps, and sandbox for practicing web dev-related work.

This one is an exercise running through a blog building tutorial, used with elements I've already created.
For information on using the markdown, see https://marked.js.org/ or [this link](https://marked.js.org/demo/?text=Marked+-+Markdown+Parser%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%0A%5BMarked%5D+lets+you+convert+%5BMarkdown%5D+into+HTML.++Markdown+is+a+simple+text+format+whose+goal+is+to+be+very+easy+to+read+and+write%2C+even+when+not+converted+to+HTML.++This+demo+page+will+let+you+type+anything+you+like+and+see+how+it+gets+converted.++Live.++No+more+waiting+around.%0A%0AHow+To+Use+The+Demo%0A-------------------%0A%0A1.+Type+in+stuff+on+the+left.%0A2.+See+the+live+updates+on+the+right.%0A%0AThat%27s+it.++Pretty+simple.++There%27s+also+a+drop-down+option+above+to+switch+between+various+views%3A%0A%0A-+**Preview%3A**++A+live+display+of+the+generated+HTML+as+it+would+render+in+a+browser.%0A-+**HTML+Source%3A**++The+generated+HTML+before+your+browser+makes+it+pretty.%0A-+**Lexer+Data%3A**++What+%5Bmarked%5D+uses+internally%2C+in+case+you+like+gory+stuff+like+this.%0A-+**Quick+Reference%3A**++A+brief+run-down+of+how+to+format+things+using+markdown.%0A%0AWhy+Markdown%3F%0A-------------%0A%0AIt%27s+easy.++It%27s+not+overly+bloated%2C+unlike+HTML.++Also%2C+as+the+creator+of+%5Bmarkdown%5D+says%2C%0A%0A%3E+The+overriding+design+goal+for+Markdown%27s%0A%3E+formatting+syntax+is+to+make+it+as+readable%0A%3E+as+possible.+The+idea+is+that+a%0A%3E+Markdown-formatted+document+should+be%0A%3E+publishable+as-is%2C+as+plain+text%2C+without%0A%3E+looking+like+it%27s+been+marked+up+with+tags%0A%3E+or+formatting+instructions.%0A%0AReady+to+start+writing%3F++Either+start+changing+stuff+on+the+left+or%0A%5Bclear+everything%5D%28%2Fdemo%2F%3Ftext%3D%29+with+a+simple+click.%0A%0A%5BMarked%5D%3A+https%3A%2F%2Fgithub.com%2Fmarkedjs%2Fmarked%2F%0A%5BMarkdown%5D%3A+http%3A%2F%2Fdaringfireball.net%2Fprojects%2Fmarkdown%2F%0A&options=%7B%0A+%22async%22%3A+false%2C%0A+%22breaks%22%3A+false%2C%0A+%22extensions%22%3A+null%2C%0A+%22gfm%22%3A+true%2C%0A+%22hooks%22%3A+null%2C%0A+%22pedantic%22%3A+false%2C%0A+%22silent%22%3A+false%2C%0A+%22tokenizer%22%3A+null%2C%0A+%22walkTokens%22%3A+null%0A%7D&version=11.1.1)

#### Main tutorial:
https://www.youtube.com/watch?v=1NrHkjlWVhM

Also draws heavily on:  
https://raddy.dev/blog/nodejs-setup-with-html-css-js-ejs/ (node project stuff)  
and  
https://www.youtube.com/watch?app=desktop&v=s38oGpnnQo8 (html/css/js project stuff).  

Note that there is already a repo for the node basic setup stuff (which I didn't realize until after I'd set my own up).  
For reference, it's here:  
https://github.com/RaddyTheBrand/NodeJS_Setup_With_HTML_CSS_JS_and_EJS

favicon.ico file comes from here:
https://favicon.io/emoji-favicons/alien-monster

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

Project structure in this repository should look like this (I did not include the cat picture from the original repository, and I renamed a couple things):
   
📂 node_modules  
📂 public  
﹂ 📂 css  
﹂⎻  📜 main.css  
﹂ 📂 img  
~~﹂⎻  🖼 cat.jpg~~  
﹂ 📂 js   
﹂⎻  📜 main.js  
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

I may have used `npm init` at some point, I can't remember if it was part of this project or not.
