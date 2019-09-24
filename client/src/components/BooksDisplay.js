// Step 1 import React, { Component } and axios
import React, { Component } from 'react'
import '../App.js';

import BookTable from './BookTable.js'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';



// Step 2: Rename this class to reflect the component being created
  


const background = {
    display: 'grid',
    root: {
        flexGrow: 1,
        margin: "0 0 0 180px", //ensure the display card does not overflow into the sidenav
      },
    paper: {
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
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: '20px',
        margin: '0 0 10px 0',
        padding: '10px'
    }
}
    

    //Step 4:Render 

    export default (books) => {

        const addBookToCart = (book, evnt) => {
            evnt.preventDefault();
            console.log("clicked")

            console.log(book)
            fetch('/shoppingCart', {
                method: 'POST',
                body: JSON.stringify(book),
                headers: {'Content-Type': 'application/json'}
            })
            .then(foo => foo.json())
            .catch(error => console.log(error))
        }

        return (

            <div style={background.root} >
                {books.map(book => (
                    <div>
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
                                            <Typography  variant="subtitle1" color="textSecondary" paragraph>
                                               Genre: {book.type}
                                            </Typography>
                                            <BookTable />
                                            <Typography  variant="subtitle1" color="textSecondary" paragraph>
                                                Also Available as: Audiobook + Large Print
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                            <button style={background.button} onClick={(e) => addBookToCart(book, e)}>Add to Cart</button>
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
        </div>
        )
    }

