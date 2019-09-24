import React from 'react'

// Step 1 import React, { Component } and axios
import '../App.js';


import BookTable from './BookTable.js'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';


// Step 2: Rename this class to reflect the component being created
  


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

    //Step 4:Render 

    export default (genre) =>{

        // const addBookToCart = (book, evnt) => {
        //     evnt.preventDefault();
        //     console.log("clicked")

        //     console.log(book)
        //     fetch('/genre', {
        //         method: 'POST',
        //         body: JSON.stringify(book),
        //         headers: {'Content-Type': 'application/json'}
        //     })
        //     .then(foo => foo.json())
        //     .catch(error => console.log(error))
        // }


        return (
            // <div style={background.root} >
            <div>
                {/* {genre.map(genre => (
                <div>
                    <div >
                        <Paper className={background.paper}>
                        {genre.type}
                        </Paper>
                </div>
            </div>
            ))} */}
                Hello
            </div>
        )
    }
