import React from 'react';
import {Movies} from './Movies';

export class App extends React.Component{

    render(){

        const sliki = [
            <img src="https://cutt.ly/ig4m1nu" alt="persona" height="60%"></img>,
            <img src="https://cutt.ly/4g4m24z" alt="rublev" height="60%"></img>,
            <img src="https://cutt.ly/bg4mXB4" alt="caj" height="60%"></img>
        ]

        const movies = [
            {name: "Persona", genre: "Drama", year: 1966, poster: sliki[0]},
            {name: "Andrei Roublev", genre: "Drama", year: 1966, poster: sliki[1]},
            {name: "Death of a Tea Master", genre: "Drama", year: 1989, poster: sliki[2]},
        ]

        return(
            <div id="app">
                <Movies filmoj={movies}/>
            </div>
        )
    }
}