const Express = require('express');

const Book = require('../Model/Book.model');

const BookRoute = Express.Router();

BookRoute.get('/',(req,res)=>{
    Book.find().populate('Author',['fname','lname']).exec()
        .then(books=>{
        res.status(200).send({data:books})
    }).catch(err=>{
        res.status(500).send({message:err})
    })
});

BookRoute.get('/:id',(req,res)=>{
    Book.findById(req.params.id,function(err,book){
        if(err){
            res.status(500).send({message:err})
        }else{
            if(!book){
                res.status(404).send({message:"No book found"})
            }else{
                res.status(200).send({data:book})
            }
        }

    })
})

BookRoute.post('/add',(req,res)=>{
    const book = new Book({
        name:req.body.name,
        ISBN: req.body.isbm,
        Author:req.body.author,
        price:req.body.price,
        YearOfPub: req.body.year,
        Publisher:req.body.publisher
    })

    book.save().then(book=>{
        res.status(200).send({data:book,message:"Book Added"})
    }).catch(err=>{
        res.status(500).send({message:err})
    })
})



module.exports = BookRoute;