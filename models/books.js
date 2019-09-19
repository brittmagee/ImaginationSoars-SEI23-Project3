// Step 1: TODO: import mongoose connection (NOTE: skip this if you are not using mongoose)
const mongoose = require('./connection.js')
// const mongoose = require('mongoose')

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
  author: {
    type: String,
    required: true
  },
  //book associated with specific genre id 
  // genreId: mongoose.Schema.Types.ObjectId,
  yearPublished: Number,
  price: Number,
  image: String,
  quantity: Number
})

const bookCollection = mongoose.model("books", booksSchema)

// const exampleBook = () => {
//     //note: the .create is a Promise
//   return bookCollection.create({
//      title: "The Giraffe and the Pelly and Me",
//      author: "Roald Dahl",
//     //  genreId: "Children",
//      yearPublished: 1985,
//      price: 7.99,
//      quantity: 2
//   })
// }


const getAllBooks = () => {
    return bookCollection.find()
    //note: the .find is a Promise
}

const getAllBooksByGenre = () => {
  return bookCollection.find({genreId})
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

const books = mongoose.model('Book', booksSchema)

// Step 4: export all functions from this file by adding their names as keys to this object
module.exports = {
  books,
  getAllBooks,
  getAllBooksByGenre,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook
}
