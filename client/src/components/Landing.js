import React, { Component } from 'react'
import LandingHeader from './LandingHeader.js'
import LandingContent from './LandingContent.js'
import Footer from './Footer.js'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const background = {
    display: 'grid',
    root: {
        flexGrow: 1,
        margin: "70px 30px 0 250px", 
      },
    paper: {
        // maxWidth: 500,
        textAlign: "center"
      },
    text: {
        color: '#ec407a',
    },
    margin: {
        margin: '30px 0 0 0',
    }
}


export default class Landing extends Component {


    render() {
        return (
            <div>
            <LandingHeader/>
            <div style={background.root} >
                <div>
                    <Paper style={background.paper}>
                        <Typography style={background.text} variant="h5" component="h2">Imagination Soars is 30!</Typography>
                        <Typography variant="body1" color="textSecondary" lineHeight={10}>For almost three decades, Imagination Soars has been serving the Atlanta community with our unique selection of new, 
                            used, and antiquarian titles. Together with a wide range of partners across Atlanta, we bring great authors to the 
                            city all year long for book signings and literary events, and our signed titles garner us customers from all around the world.</Typography>
                        <Typography variant="body1" color="textSecondary" >Browse our books--from signed, first editions of the newest titles to used or rare copies of your old favorites.</Typography>
                        <Divider style={background.margin}/>
                        <div style={background.margin}>
                            <Typography>"The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</Typography>
                            <Typography fontStyle="italic">~Dr. Seuss</Typography>
                        </div>
                    </Paper>
                </div>
                <LandingContent />
            </div>
                 <Footer />
            </div>
        )
    }
}
