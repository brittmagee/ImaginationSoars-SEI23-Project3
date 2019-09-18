// Step 1: TODO: import mongoose connection (NOTE: skip this if you are not using mongoose)
const mongoose = require('./connection.js')

// Step 1 alternative: TODO: make a global variable to act as an in memory database. 
//NOTE: doing this WILL NOT persist your data and you will loose your data once you stop running your server.

  // global.sampleModel = [];

// Step 2: TODO: create model schema 
// NOTE: skip this if you are not using mongoose

const booksSchema = new mongoose.Schema({
 title: {
   type: String,
   required: true
 },
  author: String,
  genre: String,
  yearPublished: Number,
  price: Number,
  quanity: Number
})

const bookCollection = mongoose.model("books", booksSchema)

const exampleBook = () => {
    //note: the .create is a Promise
  return bookCollection.create({
    title: {
      type: "The Giraffe and the Pelly and Me",
      required: true
    },
     author: "Roald Dahl",
     genre: "Children",
     yearPublished: 1985,
     price: 7.99,
     quantity: 2
  })
}


const getAllBooks = () => {
    return bookCollection.find()
    //note: the .find is a Promise
}


const getSingleBook = (bookId) => {
    return bookCollection.findById(bookId)
    //note: the .findById is a Promise
}


const addBook = (newBook) => {
    console.log(newBook)
   return bookCollection.create(newBook)
}


const updateBook = (bookId, updatedBook) => {
    return bookCollection.findByIdAndUpdate(bookId, updatedBook)
}


const deleteBook = (bookId) => {
    return bookCollection.findByIdAndDelete(bookId);
}
// Step 3: TODO: create collection API (NOTE: skip this if you are not using mongoose)

//const SampleCollection = mongoose.model('Sample', SampleModelSchema)
const books = mongoose.model('Book', booksSchema)
const example = mongoose.model('Example', exampleBook)

// Step 4: export all functions from this file by adding their names as keys to this object
module.exports = {
  // getHelloWorldString,
  books,
  example,
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook
}
