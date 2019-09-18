// Step 1: Import express
const express = require('express')

// Step 2: Import the api files from the models

const bookApi = require('../models/books.js')

// Step 3: Create a new router.
const bookRouter = express.Router()

// Step 4: Put all request handlers here
bookRouter.get("/", function(req, res){
  bookApi.getAllBooks().then(allBooks => {
    res.render("./books/allBooks", {allBooks});
  })
  // bookApi.getAllBooks().then(allBooks => {
  //   res.send(allBooks)
  // })
})

bookRouter.get("/exampleBook", function(req, res) {
  bookApi.exampleBook().then((newBook) => {
    res.send(newBook)
  })
})

bookRouter.get("/new", (req, res) => {
  res.render("./books/newBook", {})
})

bookRouter.get("/:bookId/edit", function(req, res){
  bookApi.getSingleBook(req.params.bookId).then((editBook) => {
    res.render("./books/editBook", {editBook})
  })
})


bookRouter.get("/:bookId", function(req,res){
  bookApi.getSingleBook(req.params.bookId).then(singleBook => {
    console.log(singleBook)
    res.render("./books/book", { singleBook });
  })
  // bookApi.getSingleBook(req.params.bookId).then(singleBook => {
  //     res.send(singleBook)
  //   })
})


bookRouter.post("/", function(req, res){
  bookApi.addBook(req.body).then((newBook) => {
    // res.send(newBook)
    console.log(newBook)
      res.redirect("/books")
    })
})

bookRouter.put("/:bookId", function(req,res){
  bookApi.updateBook(req.params.bookId, req.body).then(() => {
    res.redirect("/books")
    })

    // bookApi.updateBook().then(() => {
    //   res.send("/");
    // })
})


bookRouter.delete("/:bookId", function(req,res){
  bookApi.deleteBook(req.params.bookId).then(() => {
    res.redirect("/books")
  })
})

// Step 6: Export the router from the file
module.exports = {
  bookRouter
}