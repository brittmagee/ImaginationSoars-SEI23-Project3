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
      margin: '20px 400px 10px 400px',
      borderRadius: '20px'
    }
  }


export default class CreateGenre extends Component {

    state = {
        type: ""
    };

    handleChange = (evnt) => {

        let type = {...this.state};
    
        console.log(type)
    
        type[evnt.target.name] = evnt.target.value;
    
        this.setState(type)
    
      }

    addNewGenre = (evnt)=> {
        evnt.preventDefault();
        let newGenre = {...this.state}
        console.log(newGenre)
        fetch('/genre', {
            method: 'POST',
            body: JSON.stringify(newGenre),
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
                Add Genre
              </Typography>
              <div style={background.form}>
                <input 
                  type="text" 
                  placeholder="Type"
                  name="type"
                  value = {this.state.type} 
                  onChange={this.handleChange}
                  required 
                />
            <button onClick={this.addNewGenre} type="submit">Add</button>
            </div>
            </form>
          </div>
        </div>
        )
    }
}
