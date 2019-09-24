import React, { Component } from 'react'


let isFiltered = false;
let selectedGenre = "";

const genreAll = () => {
    isFiltered = false;
    }

const genreChildren = () => {
    isFiltered = false;
    selectedGenre = "Children"
    }

const genreTest = () => {
    console.log(isFiltered)
    console.log(selectedGenre)
    }

export default class GenreSelect extends Component {
state 

    render() {
        return (
            <div>
                <div>
                    Hello
                    <button onClick={genreAll()}>All</button>
                    <button onClick={genreChildren()}>Children</button>
                    <button onClick={genreTest()}>Test</button>
                </div>
            </div>
        )
    }
}
