// Step 1 import React, { Component } and axios
import React, { Component } from 'react'
import '../App.js';
import BookTable from './BookTable.js'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


// Step 2: Rename this class to reflect the component being created
  
const getAllBooks = () =>
    fetch('/books')
        .then(foo => foo.json())

const background = {
    display: 'grid',
    root: {
        flexGrow: 1,
        margin: "0 0 0 180px", //ensure the display card does not overflow into the sidenav
      },
    paper: {
        // padding: 1,
        // margin: 'auto',
        maxWidth: 500,
      },
    image: {
        width: 128,
        height: 128,
      },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
    price: {
        padding: '30px', 
    }
}

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
            <div style={background.root} >
                {console.log(this.state.books)}
                {this.state.books.map(book => (
                    <div>
                    {/* <div className={background.cardDetails}> */}
                    <div >
                        <Paper className={background.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                <ButtonBase className={background.image} padding="10px">
                                        <img className={background.img} src={book.image} width="200"/>
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography component="h2" variant="h5" gutterBottom >
                                                {book.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                                                by: {book.author}
                                            </Typography>
                                            <Typography  variant="subtitle1" color="textSecondary" paragraph>
                                                {book.yearPublished}
                                            </Typography>
                                            <BookTable />
                                            <Typography  variant="subtitle1" color="textSecondary" paragraph>
                                                Also Available as: Audiobook + Large Print
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                            Add To Cart
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" color="primary" style={background.price}>$ {book.price}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                </div>
            </div>
            ))}
                {/* <h3>{JSON.stringify(this.state.books)}</h3> */}
                {/* <h1>{this.state.message}</h1> */}
        </div>
        )
    }
}

