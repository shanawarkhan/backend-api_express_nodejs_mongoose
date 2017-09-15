Nodejs and Express Api :: Using mongoose to pull JSON data from mongodb. 
Created routes /api/books and /api/restaurants. 
Mongoose Schema for JSON data available in models. 
Also, added bonus tool "generate-schema" for dynamically generating Mongoose Schema.

Mongoose permitted SchemaTypes are:

		String
		Number
		Date
		Buffer
		Boolean
		Mixed
		ObjectId
		Array


app2.js
=======
	// Returning books from mongodb using mongoose
	// Routes
	// http://localhost:3000
	// http://localhost:3000/jade
	// http://localhost:3000/api/Books



app3.js
=======
	// using "req.query" when returning books
	// http://localhost/api/book?genre=Fiction
	// Using req.query to filter results based on "genre"
	// req.query = { genre: 'Fiction' }
	// See changes on line 46 47 for adding "query"

	// Route
		// http://localhost:3000/api/Books?genre=Drama
		// http://localhost:3000/api/Books?genre=Comedy

app4.js
=======
	// Returning restaurants from mongodb using mongoose

	//  use generate-schema for generating mongoose schema
	//  from json objects
	//	Source: https://github.com/nijikokun/generate-schema










	Restaurant JSON: (Source: JSON SCHEMA)
	================
	{
	  "address": {
	    "building": "1007",
	    "coord": [
	      -73.856077,
	      40.848447
	    ],
	    "street": "Morris Park Ave",
	    "zipcode": "10462"
	  },
	  "borough": "Bronx",
	  "cuisine": "Bakery",
	  "grades": [
	    {
	      "date": {
	        "$date": 1393804800000
	      },
	      "grade": "A",
	      "score": 2
	    },
	    {
	      "date": {
	        "$date": 1378857600000
	      },
	      "grade": "A",
	      "score": 6
	    },
	    {
	      "date": {
	        "$date": 1358985600000
	      },
	      "grade": "A",
	      "score": 10
	    },
	    {
	      "date": {
	        "$date": 1322006400000
	      },
	      "grade": "A",
	      "score": 9
	    },
	    {
	      "date": {
	        "$date": 1299715200000
	      },
	      "grade": "B",
	      "score": 14
	    }
	  ],
	  "name": "Morris Park Bake Shop",
	  "restaurant_id": "30075445"
	}
