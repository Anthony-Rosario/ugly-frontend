import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class PokeList extends Component {
    render() {
        return (
            <div className="gridContainer">
                
               
                {this.props.skateboards.map(board =>
                <Link to={`/${board.id}`}>
                    <div>
                    <p>Name: {board.name}</p>
                    <p>Category: {board.category}</p>
                    <p>Description: {board.description}</p>
                    </div>
                </Link>
                )};
            </div>
        )
    }
}