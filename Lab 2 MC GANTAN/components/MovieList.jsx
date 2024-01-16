import React from "react";
import classes from './MovieList.module.css';

export default class Dierbersinfo extends React.Component {
    render () {
        return(
            <div>
                <ul>
                    <h1>Movie List</h1>
                    <li>The Martian</li>
                    <li>Midway</li>
                    <li>Chruchill</li>
                </ul>
            </div>
        )
    }
}