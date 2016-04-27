var _ = require('lodash');
var Cat = require('../models/cat.js');

module.exports = function(app){
    _cats = [];
    
    /*create*/
    app.post('/cat',function(req,res){
        var newCat = new Cat(req.body);
        newCat.save(function(err){
            if(err){
                res.json({info:'error during cat create',error:err});
            }else{
                res.json({info:'cat created succesfully'});    
            }            
        })
    });
    
    /*read*/
    app.get('/cat',function(req,res){
        Cat.find(function(err,cats){
             if(err){
                res.json({info:'error during finding cat',error:err});
            }else{
                res.json({info:'cats found succesfully',data:cats});    
            }                
        })
    })
    
    app.get('/cat/:id',function(req,res){
        Cat.findById(req.params.id,function(err,cat){
             if(err){
                res.json({info:'error during finding  cat',error:err});
            }else{
                if(cat){
                    res.json({info:'cats found succesfully',data:cat});    
                }else{
                    res.json({info:'can not find cat'});
                }
               
            }                
        })
    });
    
    /*update*/
    app.put('/cat/:id',function(req,res){
        Cat.findById(req.params.id,function(err,cat){
             if(err){
                res.json({info:'error during finding  cat',error:err});
            }else{
                if(cat){
                   _.merge(cat,req.body);
                   cat.save((function(err){
                       if(err){
                            res.json({info:'error found during update',error:err});
                       }else{
                            res.json({info:'can updated succesfully'});
                       }
                   })) ;
                }else{
                    res.json({info:'can not find cat'});
                }
               
            }                
        })
    })
    
    /*delete*/
    app.delete('/cat/:id',function(req,res){
        Cat.findByIdAndRemove(req.params.id,function(err,cat){
            if(err){
                res.json({info:'error during remove cat',error:err});
            }else{
                    res.json({info:'can not find cat'});
            }                
        })
    })
    
}

//{"name":"bosh","age":"35","position":"power porward"}