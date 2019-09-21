import React, { Component } from 'react'
import LandingHeader from './LandingHeader.js'
import Footer from './Footer.js'



const background = {
    display: 'grid',
    root: {
        flexGrow: 1,
      },
}


export default class Landing extends Component {


    render() {
        return (
            <div>
                 <LandingHeader/>
                 <Footer />
            </div>
        )
    }
}
