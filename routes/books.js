const express=require('express');
const router=express.Router();
//In-memory array to store books
let books=[];
let nextId=1;
//get /books -get all books
router.get('/',(req,res)=>{
    res.json(books);
});
//POST /books -add a new book
router.post('/',(req,res)=>{
    const{title,author}=req.body;
    if(!title||!author){
        return res.status(400).json({message:'title and author are required'});
        }
        const newbook={id:nextId++,title,author};
        books.push(newbook);
        res.status(201).json(newbook);
    
});
//put /book/:id-update a book by Id
router.put('/:id',(req,res)=>{
    const bookId=parseInt(req.params.id);
    const{title,author}=req.body;
    const book=books.find(b=>b.id==bookId);
    if(!book){
        return res.status(404).json({message:'Book not found.'});
    }
    if(title) book.title=title;
    if(author) book.author=author;
    res.json(book);
});
//Delete /books/:id -Delete  abook by id
router.delete('/:id',(req,res)=>{
    const bookId=parseInt(req.params.id);
    const index=books.findIndex(b=>b.id===bookId);
    if(index===-1){
        return res.status(404).json({message:'Book not found'});
        }
    const deletebook=books.splice(index,1);
    res.json({message:'Book deleted',book:deletebook[0]});

});
module.exports=router;