import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';

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
  form: {
    display: 'flex',
    justifyContent: 'center'
  },
  text: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    margin: '0 400px 10px 400px',
    borderRadius: '20px'
  }
}



export default class BookForm extends Component {


    state = {
        title: "",
        author: "",
        image: "",
        price: 9.99,
        quantity: 1,
        yearPublished: 2019,
        // genreId: "",
        type: ""
    };

  handleChange = (evnt) => {

    let book = {...this.state};

    console.log(book)

    book[evnt.target.name] = evnt.target.value;

    this.setState(book)

  }


  addNewBook = (evnt)=> {
    evnt.preventDefault();
    let newBook = {...this.state}
    console.log(newBook)
    fetch('/books', {
        method: 'POST',
        body: JSON.stringify(newBook),
        headers: {'Content-Type': 'application/json'}
    })
    .then(foo => foo.json())
    .catch(error => console.log(error))
    window.location.reload();
}

  render() {
    return (
      <div>
        <div style={background.root}>
        <form>
          <Typography variant="h4" color="inherit" noWrap style={background.text}>
            Add Book
          </Typography>
          <div style={background.form}>
            <input 
              type="text" 
              placeholder="Title"
              name="title"
              value = {this.state.title} 
              onChange={this.handleChange}
              required 
            />
            <input 
                type="text"
                placeholder="Author" 
                name="author"
                value = {this.state.author} 
                onChange={this.handleChange}
                required
            />
            <input 
                type="text"
                placeholder="Image (url)" 
                name="image"
                value = {this.state.image} 
                onChange={this.handleChange}
            />
            <input 
                type="number"
                placeholder="Price" 
                name="price"
                value = {this.state.price} 
                onChange={this.handleChange}
            />
            <input 
                type="number"
                placeholder="Quantity"
                name="quantity"
                value = {this.state.quantity} 
                onChange={this.handleChange}
            />
            <input 
                type="number"
                placeholder="Year Published" 
                name="yearPublished"
                value = {this.state.yearPublished} 
                onChange={this.handleChange}
            />
          
            {/* <select name="genre" value="Select..."> */}
            <select name="type" value ={this.state.type} onChange={this.handleChange}>
              {this.props.type.map(genre =>
                // <option value={genre._id}>{genre.type}</option>
                <option value={genre.type}>{genre.type}</option>
              )}
            </select>
        <button onClick={this.addNewBook} type="submit">Add</button>
        </div>
    	</form>
      </div>
    </div>
    )
  }
}
