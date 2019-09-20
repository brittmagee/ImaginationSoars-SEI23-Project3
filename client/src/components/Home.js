import React, { Component, createFactory } from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import Genre from './Genre.js'

// import { connect } from ‘react-redux’

const allGenres = () => 
    fetch('/genre')
    .then(foo => foo.json())

export default class Home extends Component {
    state = {
        type: [{}]
    }

    componentDidMount() {
        this.getBooksFromServer()
    }

    getBooksFromServer() {
        allGenres()
            .then(allGenres => {
                // console.log(allBooks)
                this.setState( { type: allGenres } )
            })
    }
    
    render() {
        return (
            <div className="container">
                <Header 
                    type={this.state.type}
                />
                <Genre 
                    type={this.state.type}
                />
                <Footer />
            </div>
        )
    }
}
