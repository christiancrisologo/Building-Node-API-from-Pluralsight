var express=require('express');
var app=express();
var bodyParser = require('body-parser');
 
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({
    extended:true
}));
var pet = require('./routes/pet.js')(app);
app.server=app.listen(3003,function(){
    console.log('Server running at http://127.0.0.1:3003/');    
});