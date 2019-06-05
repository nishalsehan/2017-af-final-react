const Express  = require('express');
const AuthorRoute = Express.Router();
const Author = require('../Model/Author.model');

AuthorRoute.get('/',(req,res)=>{
    Author.find().then(authors=>{
        res.status(200).send({data:authors})
    }).catch(err=>{
        res.status(500).send({message:err})
    })
})
AuthorRoute.get('/:id',(req,res)=>{
    Author.findById(req.params.id,function(err,author){
        if(err){
            res.status(500).send({message:err})
        }else{
            if(!author){
                res.status(404).send({message:"No book found"})
            }else{
                res.status(200).send({data:author})
            }
        }
    })
})

module.exports = AuthorRoute;