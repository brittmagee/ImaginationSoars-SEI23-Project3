import React, { Component } from 'react'

const shoppingCart = () => 
    fetch('/shoppingCart')
    .then(foo => foo.json())

export default class ShoppingCart extends Component {
    state = {
        cartItems: []
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
        return (
            <div>
               {this.state.cartItems.map((item) => {
                   return (
                    <div>
                        <h3>{item.title}</h3>
                        <h3>{item.author}</h3>
                        <h4>{item.price}</h4>
                        <h5>{item.quantity}</h5>
                    </div>   
                    )
               })}
            </div>
        )
    }
}
