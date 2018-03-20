var mongoose = require('mongoose');
var Note = require('./note');
var noteSchema = mongoose.model('Note').schema;
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    notes:{
        type:[noteSchema],
        default:[]
    }
});

module.exports = mongoose.model('User',userSchema );