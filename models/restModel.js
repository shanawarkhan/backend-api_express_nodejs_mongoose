var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restModel = new Schema({
	address: {
		building: Number,
		coord: Array,
		street: String,
		zipcode: Number
	},
	borough: {type: String},
	cuisine: {type: String},
	grades: [{
		date: {date: Date},
		grade: String,
		score: Number
	}],
	name: {type: String},
	restaurant_id: {type: Number}
});

// var restModel = new Schema({
// 	address: { type: 'object',
// 	     properties: 
// 	      { address: [Object],
// 	        borough: [Object],
// 	        cuisine: [Object],
// 	        grades: [Object],
// 	        name: [Object],
// 	        restaurant_id: [Object] },
// 	     required: 
// 	      [ 'address',
// 	        'borough',
// 	        'cuisine',
// 	        'grades',
// 	        'name',
// 	        'restaurant_id' ],
// 	     title: 'Restaurant' } }
// 	})

module.exports = mongoose.model('Restaurant', restModel);
