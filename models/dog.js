var mongoose = require('mongoose');
var catScheme = mongoose.Schema({
    name:String,
    age:Number,
    position:String
});

module.exports = mongoose.model('Dog',catScheme);