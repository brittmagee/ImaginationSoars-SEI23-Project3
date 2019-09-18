// Step 1: Import express
const express = require('express')

// Step 2: Import the api files from the models

const bookApi = require('../models/books.js')

// Step 3: Create a new router.
const bookRouter = express.Router()
// const bookRouter = express.Router({mergeParams: true})

// Step 4: Put all request handlers here
bookRouter.get("/", (req, res) => {
  genreApi.getAllBooks()
    .then(allBooks => {
    res.json(allBooks)
  })
    .catch((error) => {
      res.send(error)
    })
})

bookRouter.get("/", (req, res) => {
  genreApi.getAllBooksByGenre(req.params.genreId)
    .then(allBooksByGenre => {
    res.json(allBooksByGenre)
  })
    .catch((error) => {
      res.send(error)
    })
})

genreRouter.get("/exampleBook", function(req, res) {
  genreApi.exampleBook()
    .then(exampleBook => {
      res.json(exampleBook)
    })
    .catch((error) => {
      res.send(error)
    })
})


genreRouter.get("/:genreId", (req,res) => {
  genreApi.getSingleGenre(req.params.genreId)
    .then(singleGenre => {
      console.log(singleGenre)
      res.json(singleGenre)
    })
    .catch((error) => {
      res.send(error)
    })
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