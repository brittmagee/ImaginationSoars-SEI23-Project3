// Step 1: Import express
const express = require('express')

// Step 2: Import the api files from the models

const bookApi = require('../models/books.js')

// Step 3: Create a new router.
const bookRouter = express.Router()
// const bookRouter = express.Router({mergeParams: true})

// Step 4: Put all request handlers here
bookRouter.get("/", (req, res) => {
  bookApi.getAllBooks()
    .then(allBooks => {
    res.json(allBooks)
  })
    .catch((error) => {
      res.send(error)
    })
})

bookRouter.get("/", (req, res) => {
  bookApi.getAllBooksByGenre(req.params.genreId)
    .then(allBooksByGenre => {
    res.json(allBooksByGenre)
  })
    .catch((error) => {
      res.send(error)
    })
})

bookRouter.get("/exampleBook", function(req, res) {
  bookApi.exampleBook()
    .then(exampleBook => {
      res.json(exampleBook)
    })
    .catch((error) => {
      res.send(error)
    })
})


bookRouter.get("/:bookId", (req,res) => {
  bookApi.getSingleBook(req.params.bookId)
    .then(singleBook => {
      console.log(singleBook)
      res.json(singleBook)
    })
    .catch((error) => {
      res.send(error)
    })
})

bookRouter.post("/", (req, res) => {
  bookApi.addBook(req.body)
    .then((newBook) => {
      res.json(newBook)
    })
    .catch((error) => {
      res.send(error)
    })
})

bookRouter.put("/:bookId", (req,res) => {
  bookApi.updateBook(req.params.bookId, req.body)
    .then((updatedBook) => {
      res.json(updatedBook)
    })
    .catch((error) => {
      res.send(error)
    })
})


bookRouter.delete("/:bookId", (req,res) => {
  bookApi.deleteBook(req.params.bookId)
    .then((deleteBook) => {
      res.json(deleteBook)
    })
    .catch((error) => {
      res.send(error)
    })
})

// Step 6: Export the router from the file
module.exports = {
  bookRouter
}