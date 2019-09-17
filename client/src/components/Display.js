// Step 1 import React, { Component } and axios
import React, { Component } from 'react'

// Step 2: Rename this class to reflect the component being created

export default class Display extends Component {

    //Step 3: Create a state for the component to store view data
    state = {
        message: 'Display'
    }

    //Step 4:Render 

    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}
