//Place all functions, styling, and/or DB schemas here for a single model.

// Step 1: TODO: import mongoose connection (NOTE: skip this if you are not using mongoose)

const mongoose = require('./connection.js')

// Step 1 alternative: TODO: make a global variable to act as an in memory database. 
//NOTE: doing this WILL NOT persist your data and you will loose your data once you stop running your server.

  // global.sampleModel = [];

// Step 2: TODO: create model schema 
// NOTE: skip this if you are not using mongoose

const cartSchema = new mongoose.Schema({
  title: String,
  author: String,
  image: String,
  price: Number,
  quantity: Number
})

// Step 3: TODO: create collection API (NOTE: skip this if you are not using mongoose)
const shoppingCartCollection = mongoose.model('shoppingCart', cartSchema)

// Step 4: TODO: delete this it's just a sample
const allCartItems = () => {
  return shoppingCartCollection.find()
  //note: the .find is a Promise
}

const oneCartItem = (bookId) => {
  return shoppingCartCollection.findById(bookId)
}

const addBookToCart = (bookId) => {
  return shoppingCartCollection.create(bookId)
}

const updateCart = (genreId, updatedGenre) => {
  return genreCollection.findByIdAndUpdate(genreId, updatedGenre, {new:true})
}

const deleteCart = (bookId) => {
  return shoppingCartCollection.findByIdAndDelete(bookId)
}

// Step 5: TODO: export all functions from this file by adding their names as keys to this object
module.exports = {
  allCartItems,
  oneCartItem,
  addBookToCart,
  updateCart,
  deleteCart
}
