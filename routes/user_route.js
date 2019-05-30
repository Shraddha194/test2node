var express=require('express');
var router=express.Router();
var user=require('../Model/user_model');

router.post('/',function(req,res,next){
    user.loginUser(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;