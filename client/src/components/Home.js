import React, { Component } from 'react'
import Header from './Header.js'
import Nav from './Nav.js'
import Display from './Display.js'
import Footer from './Footer.js'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
                <Display />
                <Footer />
            </div>
        )
    }
}
