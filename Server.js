// Git Hub : https://github.com/iamshaunjp/node-crash-course
const _ = require ('lodash')
const express = require('express');
//express app
const app = express();

var port = process.env.port || 3000
//install nodemon globaly >npm install -g nodemon


//register view engine
app.set('view engine', 'ejs');

// Listen for requests
app.listen(3000, () => console.log('Listening on prot' + port));

//Using lodash
const num =_.random(0,20);
console.log(num);

// home page
app.get('/', (req, res) => {
   // res.send('Hello World');
   //res.sendFile('./views/index.html',{ root: __dirname });
   res.render('index');    //calling index.ejs file
});

// about page
app.get('/about', (req, res) => {
   res.render('about');    //calling index.ejs file
});

// redirects
app.get('/about-us', (req, res) => {
   res.redirect('/about');
});

// 404 page - always at the bottom of the list
app.use((reg, res) => {
   res.status(404).render('404');
});