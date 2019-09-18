// Step 1: TODO: import mongoose connection
//NOTE: skip this if you are not using mongoose
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
 author: {
  type: String,
},
 genre: {
  type: String,
},
yearPublished: {
  type: String,
},
price: {
  type: Number,
}
})

const genreSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  books : [booksSchema]
 })

// Step 3: TODO: create collection API (NOTE: skip this if you are not using mongoose)

//const SampleCollection = mongoose.model('Sample', SampleModelSchema)
const books = mongoose.model('Book', booksSchema)
const genre = mongoose.model('Genre', genreSchema)

// Step 4: export all functions from this file by adding their names as keys to this object
module.exports = {
  // getHelloWorldString,
  books
}
