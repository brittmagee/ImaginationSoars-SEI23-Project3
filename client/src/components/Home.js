import React, { Component, createFactory } from 'react'
import Header from './Header.js'
import Display from './Display.js'
import Footer from './Footer.js'
import Genre from './Genre.js'

// import { connect } from ‘react-redux’


export default class Home extends Component {
    
    
    render() {
        return (
            <div className="container">
                <Header />
                <Genre />
                <Footer />
            </div>
        )
    }
}
