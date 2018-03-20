var mongoose = require('mongoose');

// note schema
var noteSchema = mongoose.Schema({
	content:{
		type: String,
		required: true
	},
	createAt:{
		type: Date,
		default: Date.now
	}
});

var Note = module.exports = mongoose.model('Note', noteSchema);
