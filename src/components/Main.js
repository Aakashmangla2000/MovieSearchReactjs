import React, { Component } from 'react'
import './main.css'
import MovieSearch from './MovieSearch'

class Main extends Component {
    render() {
        return (
            <div className="container">
               <h1>React.js <i className="material-icons">event_seat</i> Movie Search</h1> 
               <MovieSearch/>
            </div>
        )
    }
}

export default Main
