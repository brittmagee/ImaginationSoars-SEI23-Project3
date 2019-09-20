//Place all functions, styling, and/or DB schemas here for a single model.

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
  // books : [booksSchema]
 })

 const genreCollection = mongoose.model("genres", genreSchema)

//  const exampleGenre = () => {
//      //note: the .create is a Promise
//    return genreCollection.create({
//     type: "Fantasy",
//     books : [booksSchema]
//    })
//  }
 
 
 const getAllGenres = () => {
     return genreCollection.find()
     //note: the .find is a Promise
 }
 
 
 const getSingleGenre = (genreId) => {
     return genreCollection.findById(genreId)
     //note: the .findById is a Promise
 }
 
 
 const addGenre = (newGenre) => {
     console.log(newGenre)
    return genreCollection.create(newGenre)
 }
 
 
 const updateGenre = (genreId, updatedGenre) => {
     return genreCollection.findByIdAndUpdate(genreId, updatedGenre, {new:true})
 }
 
 
 const deleteGenre = (genreId) => {
     return genreCollection.findByIdAndDelete(genreId);
 }
 
// Step 3: TODO: create collection API (NOTE: skip this if you are not using mongoose)

const genre = mongoose.model('Genre', genreSchema)
// const example = mongoose.model('Example', exampleGenre)

// Step 4: export all functions from this file by adding their names as keys to this object
module.exports = {
  genre,
  getAllGenres,
  getSingleGenre,
  addGenre,
  updateGenre,
  deleteGenre
}
