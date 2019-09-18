// Step 1: Import express
const express = require('express')

// Step 2: Import the api files from the models

const genreApi = require('../models/genre.js')

// Step 3: Create a new router.
const genreRouter = express.Router()
// const bookRouter = express.Router({mergeParams: true})

// Step 4: Put all request handlers here
genreRouter.get("/", (req, res) => {
  genreApi.getAllGenres()
    .then(allGenres => {
    res.json(allGenres)
  })
    .catch((error) => {
      res.send(error)
    })
})

genreRouter.get("/exampleGenre", function(req, res) {
  genreApi.exampleGenre()
    .then(exampleGenre => {
      res.json(exampleGenre)
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


genreRouter.post("/", (req, res) => {
  genreApi.addGenre(req.body)
    .then((newGenre) => {
      res.json(newGenre)
    })
    .catch((error) => {
      res.send(error)
    })
})

genreRouter.put("/:genreId", (req,res) => {
  genreApi.updateGenre(req.params.genreId, req.body)
    .then((updatedGenre) => {
      res.json(updatedGenre)
    })
    .catch((error) => {
      res.send(error)
    })
})


genreRouter.delete("/:genreId", (req,res) => {
  genreApi.deleteGenre(req.params.genreId)
    .then((deleteGenre) => {
      res.json(deleteGenre)
    })
    .catch((error) => {
      res.send(error)
    })
})

// Step 6: Export the router from the file
module.exports = {
  genreRouter
}