var _ = require('lodash');
var Dog = require('../models/dog.js');

module.exports = function(app){
    _dogs = [];
    
    /*create*/
    app.post('/dog',function(req,res){
        var newDog = new Dog(req.body);
        newDog.save(function(err){
            if(err){
                res.json({info:'error during dog create',error:err});
            }else{
                res.json({info:'dog created succesfully'});    
            }            
        })
    });
    
    /*read*/
    app.get('/dog',function(req,res){
        Dog.find(function(err,dogs){
             if(err){
                res.json({info:'error during finding dog',error:err});
            }else{
                setTimeout(function(){
                     res.json({info:'dogs found succesfully = ' +  Date.now(),data:dogs});  
                },7000);
                
            }                
        })
    })
    
    app.get('/dog/:id',function(req,res){
        Dog.findById(req.params.id,function(err,dog){
             if(err){
                res.json({info:'error during finding  dog',error:err});
            }else{
                if(dog){
                    res.json({info:'dogs found succesfully',data:dog});    
                }else{
                    res.json({info:'can not find dog'});
                }
               
            }                
        })
    });
    
    /*update*/
    app.put('/cat/:id',function(req,res){
        Dog.findById(req.params.id,function(err,dog){
             if(err){
                res.json({info:'error during finding  dog',error:err});
            }else{
                if(dog){
                   _.merge(dog,req.body);
                   dog.save((function(err){
                       if(err){
                            res.json({info:'error found during update',error:err});
                       }else{
                            res.json({info:'can updated succesfully'});
                       }
                   })) ;
                }else{
                    res.json({info:'can not find dog'});
                }
               
            }                
        })
    })
    
    /*delete*/
    app.delete('/dog/:id',function(req,res){
        Dog.findByIdAndRemove(req.params.id,function(err,dog){
            if(err){
                res.json({info:'error during remove dog',error:err});
            }else{
                    res.json({info:'can not find dog'});
            }                
        })
    })
    
}

//{"name":"bosh","age":"35","position":"power porward"}