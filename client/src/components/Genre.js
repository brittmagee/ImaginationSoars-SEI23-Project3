import React, { Component } from 'react'

const allGenres = () => 
    fetch('/genre')
    .then(foo => foo.json())

export default class Genre extends Component {

    state = {
        type: [{}]
    }

    componentDidMount() {
        this.getBooksFromServer()
    }

    getBooksFromServer() {
        allGenres()
            .then(allGenres => {
                // console.log(allBooks)
                this.setState( { type: allGenres } )
            })
    }

    render() {
        return (
            <div>
                <label for="genre">Genre</label>
                <select name="genre" value="Select...">
                    {this.props.type.map(genre =>
                        <option value={genre._id}>{genre.type}</option>
                    )}
                </select>
            </div>
        )
    }
}
