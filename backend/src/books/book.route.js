const express = require('express')
const router = express.Router();
const Book = require('./book.model'); // adjust the path if needed
const { postABook, getAllBooks, getSingleBook, updateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');

// frontend => backend server =>  controller =>  book schema => dtabase => send  data to the server => back to thw frontend
    
// post = when submit something frontend to db
// get = when get somthing back from db
// put/path = when edit or update something
// delete = when delete something

//post a book 
router.post("/create-book", verifyAdminToken , postABook)

//get all books

router.get("/" , getAllBooks)

// single book endpoint

router.get("/:id", getSingleBook)

// update a book endpoint

router.put("/edit/:id", verifyAdminToken , updateBook)

//delete book

router.delete("/:id", verifyAdminToken , deleteABook)

module.exports = router;
