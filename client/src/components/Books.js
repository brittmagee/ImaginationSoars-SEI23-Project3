import React, { Component} from 'react'
import Footer from './Footer.js'
import BooksHeader from './BooksHeader.js'
import Genre from './Genre.js'
import BookForm from './BookForm.js'


const allGenres = () => 
    fetch('/genre')
    .then(foo => foo.json())

const getAllBooks = () =>
    fetch('/books')
        .then(foo => foo.json())

export default class Home extends Component {
    state = {
        type: [{}],
        books: [{}]
    }

    componentDidMount() {
        this.getBooksFromServer()
    }

    getBooksFromServer() {
        getAllBooks()
            .then(allBooks => {
                // console.log(allBooks)
                this.setState( { books: allBooks } )
            })

        allGenres()
            .then(allGenres => {
                // console.log(allBooks)
                this.setState( { type: allGenres } )
            })
    }
    
    addNewBook(){
        fetch('/books', {
            method: 'POST',
            body: JSON.stringify(),
            headers: {'Content-Type': 'application/json'}
        })
        .then(foo => foo.json())
        .catch(error => console.log(error))
        .then(this.getBooksFromServer())
    }
    
    render() {
        return (
            <div className="container">
                <BooksHeader books={this.state.books} />
                <BookForm  type={this.state.type}/>
                <Footer />
            </div>
        )
    }
}
