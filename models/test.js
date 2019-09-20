const bookApi = require('../models/books.js')

const sampleBooks = [

]

bookApi.getAllBooks()
    .then(books => 
        Promise.all(books.map(book => bookApi.deleteBook(book._id)))
    ).then(() =>
        Promise.all(sampleBooks.map(book => bookApi.addBook(book)))
    )