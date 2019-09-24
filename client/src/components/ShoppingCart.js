import React, { Component } from 'react'

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

const background = {
    x: {
        margin: "0 0 0 400px", //places delete button on right upper hand corner
      },
    price: {
        margin: "0 0 0 150px"
    },
    text:{
        textAlign: "center"
    },
    padding:{
        paddingRight: "300px"
    },
    image:{
        paddingLeft: "5px",
        marginBottom: "10px"
    }
  }


const shoppingCart = () => 
    fetch('/shoppingCart')
    .then(foo => foo.json())



export default class ShoppingCart extends Component {
    state = {
        cartItems: [],
    };

    componentDidMount() {
       this.getCartItemsFromServer()
    }

    getCartItemsFromServer() {
        shoppingCart()
            .then(items => {
                this.setState( { cartItems: items} )
            })
    }

    render() {

        const deleteBook = (item, evnt) => {
            evnt.preventDefault();
            // let deleteBook = {...this.state}
            console.log(item)
            // fetch('/shoppingCart', {
            fetch(`/shoppingCart/${item._id}`, {
                method: 'DELETE',
                body: JSON.stringify(item),
                headers: {'Content-Type': 'application/json'}
            })
            .then(foo => foo.json())
            .catch(error => console.log(error))
            window.location.reload();
        }

        return (
            <div>
               {this.state.cartItems.map((item) => {
                   return (
                    <div>
                        <Paper >
                        <IconButton aria-label="delete" style={background.x}>
                            <DeleteIcon fontSize="small" onClick={(e) => deleteBook(item, e)}/>
                        </IconButton>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={background.image} padding="10px">
                                        <img className={background.img} src={item.image} width="100" style={background.image}/>
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography component="h2" variant="h5" gutterBottom style={background.text}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary" gutterBottom style={background.text}>
                                                Author: {item.author}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary" gutterBottom style={background.text}>
                                                Quantity: {item.quantity}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" color="primary" style={background.price}>$ {item.price}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>   
                    )
               })}
            </div>
        )
    }
}
