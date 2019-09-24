// Step 1: Import express
const express = require('express')

// Step 2: Import the api files from the models

const shoppingCartApi = require('../models/shoppingCart.js')

// Step 3: Create a new router.
const shoppingCartRouter = express.Router()

// Step 4: Put all request handlers here

shoppingCartRouter.get("/", (req, res) => {
  shoppingCartApi.allCartItems()
    .then(cartItems => {
    res.json(cartItems)
    console.log("tester working")
  })
    .catch((error) => {
      res.send(error)
    })
})

shoppingCartRouter.get("/:cartId", (req,res) => {
  shoppingCartApi.oneCartItem(req.params.bookId)
    .then(singleCartItem => {
      console.log(singleCartItem)
      res.json(singleCartItem)
    })
    .catch((error) => {
      res.send(error)
    })
})

shoppingCartRouter.post("/", (req, res) => {
  shoppingCartApi.addBookToCart(req.body)
    .then((newCartItem) => {
      res.json(newCartItem)
    })
    .catch((error) => {
      res.send(error)
    })
})

shoppingCartRouter.delete("/:bookId", (req,res) => {
  shoppingCartApi.deleteCart(req.params.bookId)
    .then((deleteCartItem) => {
      res.json(deleteCartItem)
    })
    .catch((error) => {
      res.send(error)
    })
})

// Step 5: Export the router from the file
module.exports = {
  shoppingCartRouter
}