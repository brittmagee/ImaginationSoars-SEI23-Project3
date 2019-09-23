import React, { Component } from 'react'
import LandingHeader from './LandingHeader.js'
import Footer from './Footer.js'
import BookForm from './BookForm.js'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const background = {
    display: 'grid',
    root: {
        flexGrow: 1,
        margin: "70px 30px 0 250px", 
      },
      paper: {
        // padding: 1,
        // margin: 'auto',
        maxWidth: 500,
        textAlign: "center"
      },
}


export default class Landing extends Component {


    render() {
        return (
            <div>
            <LandingHeader/>
            <div style={background.root} >
                <div>
                    <Paper className={background.paper}>
                        <h1>Welcome Message</h1>
                        <h3>The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</h3>
                        <h4>~Dr. Seuss</h4>
                    </Paper>
                </div>
            </div>
                 <Footer />
            </div>
        )
    }
}
