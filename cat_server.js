var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({
    extended:true
}));
var cats = require('./routes/cat.js')(app);
app.server=app.listen(3002,function(){
    console.log('Server running at http://127.0.0.1:3002/');    
});