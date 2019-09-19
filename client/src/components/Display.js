// Step 1 import React, { Component } and axios
import React, { Component } from 'react'


// Step 2: Rename this class to reflect the component being created

const getAllBooks = () =>
    fetch('/books')
        .then(foo => foo.json())

export default class Display extends Component {

    //Step 3: Create a state for the component to store view data
    state = {
        message: 'Display',
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
    }

    //Step 4:Render 

    render() {
        return (
            <div>
                {console.log(this.state.books)}
                {this.state.books.map(book => (
                    <div>
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                        {/* <h5>{book.genreId}</h5> */}
                        <h5>{book.yearPublished}</h5>
                        <h5>{book.price}</h5>
                        <h5>{book.quantity}</h5>
                    </div>
                    )
                )}
                {/* <h3>{JSON.stringify(this.state.books)}</h3> */}
                {/* <h1>{this.state.message}</h1> */}
            </div>
        )
    }
}

