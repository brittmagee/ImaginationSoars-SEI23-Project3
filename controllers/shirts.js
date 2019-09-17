// Step 1: Import express
const express = require('express')

// Step 2: Import the api files from the models

const templateApi = require('../models/template.js')

// Step 3: Create a new router.
const templateRouter = express.Router()

// Step 4: Put all request handlers here


// Step 5: Delete this handler; it's just a sample
templateRouter.get('/', (req, res) => {
  res.json(templateApi.getHelloWorldString())
})

// Step 6: Export the router from the file
module.exports = {
  templateRouter
}