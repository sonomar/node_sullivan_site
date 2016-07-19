// set variables for environment
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var path = require('path');

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // use either jade or ejs       
// instruct express to server up static assets
app.use(express.static('public'));
app.use(expressLayouts);
app.use('/js',express.static(path.join(__dirname, 'js/')));
app.use('/img',express.static(path.join(__dirname, 'img/')));

// set routes
app.get('/', function(req, res) {
	var locals = {
    title: 'Sullivan Test Site',
    description: 'Test Site for Sullivan by Lawson Marlowe',
    header: 'DUKE'
  };
  res.render('layout', locals);
});

// Set server port
app.listen(4000);
console.log('server is running');