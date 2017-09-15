// Returning books and using req.query
// http://localhost/api/book?genre=Fiction
// Using req.query to filter results based on "genre"
// req.query = { genre: 'Fiction' }
// See changes on line 46 47 for adding "query"

// Route
	// http://localhost:3000/api/Books?genre=Drama
	// http://localhost:3000/api/Books?genre=Comedy

var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var Book = require('./models/bookModel');

var bookRouter = express.Router();

var mongoose = require('mongoose');

// Connecting Mongodb Database
var db = mongoose.connect('mongodb://localhost/imports');


	app.use(logger('dev'));
	app.use(express.static(__dirname + '/views'));
	app.use(express.static(__dirname + '/public'));


	app.get('/', function(req, res, next) {	
		// specifying path to send html file (Require express.static method on views folder)
		res.sendFile(path.join(__dirname + '/views/index.html'));
	});


	app.set('view engine', 'jade');
	app.get('/jade', function(req, res, next) {
		res.render('index', { title: 'Express App - jade view'});
	});


bookRouter.route('/Books')
	.get(function(req, res) {

		// Adding query in find function
		var query = req.query;
		Book.find(query, function(err, books) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.json(books);
			}
		});
	});


app.use('/api', bookRouter);


app.get('/', function(req, res) {
	res.send('Welcome to my Api!');
})


app.listen(3000, function() {
	console.log('launching server at 3000');
});