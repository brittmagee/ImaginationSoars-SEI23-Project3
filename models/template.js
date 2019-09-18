const mongoose = require('./connection.js')

function getHelloWorldString() {
  return 'hello world'
}


module.exports = {
  getHelloWorldString
}
