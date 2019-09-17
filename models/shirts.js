//Place all functions, classes, and/or DB schemas here for a single model.

// Step 1: TODO: import mongoose connection
//NOTE: skip this if you are not using mongoose

const mongoose = require('./connection.js')

// Step 1 alternative: TODO: make a global variable to act as an in memory database. 
//NOTE: doing this WILL NOT persist your data and you will loose your data once you stop running your server.

global.sampleModel = [];

// Step 2: TODO: create model schema 
// NOTE: skip this if you are not using mongoose

const shirtSchema = new mongoose.Schema({
 name: {
   type: String,
 },
 sitcom: {
  type: String,
},
image: {
  type: String,
},
price: {
  type: Number,
}
})

const sitcomSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  years: {
   type: String,
 },
 image: {
   type: String,
 },
  shirts: [shirtSchema]
 })

// Step 3: TODO: create collection API (NOTE: skip this if you are not using mongoose)

//const SampleCollection = mongoose.model('Sample', SampleModelSchema)
const shirts = mongoose.model('Shirts', shirtSchema)
const sitcoms = mongoose.model('Sitcoms', sitcomSchema)

// Step 4: TODO: delete this it's just a sample
  // function getHelloWorldString() {
  //   return 'hello world'
  // }

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  // getHelloWorldString,
  shirts,
  sitcoms
}