//Place all functions, classes, and/or DB schemas here for a single model.

// Step 1: TODO: import mongoose connection (NOTE: skip this if you are not using mongoose)

const mongoose = require('./connection.js')
const booksSchema = require('./books.js')

// Step 1 alternative: TODO: make a global variable to act as an in memory database. 
//NOTE: doing this WILL NOT persist your data and you will loose your data once you stop running your server.

  // global.sampleModel = [];

// Step 2: TODO: create model schema 
// NOTE: skip this if you are not using mongoose

const genreSchema = new mongoose.Schema({
  type: String,
  books : [booksSchema]
 })


 
// Step 3: TODO: create collection API (NOTE: skip this if you are not using mongoose)

//const SampleCollection = mongoose.model('Sample', SampleModelSchema)
const genre = mongoose.model('Genre', genreSchema)

// Step 4: export all functions from this file by adding their names as keys to this object
module.exports = {
  // getHelloWorldString,
  genre
}
