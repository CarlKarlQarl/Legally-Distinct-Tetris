import React, { Component } from 'react'
import Board from './Board'

export default class Tetris extends Component {

    state = {
        width: 10,
        height: 24,
        activeSquares: [{
            coordX: 0,
            coordY: 0
        }]
    }

    handleClick = () => {
        this.setState({
            activeSquares: [
                {
                    coordX: 3,
                    coordY: 1
                },{
                    coordX: 4,
                    coordY: 1
                },{
                    coordX: 4,
                    coordY: 0
                },{
                    coordX: 5,
                    coordY: 0
                }, ...this.state.activeSquares
            ]
        })
    }

    render() {
        return (
            <div className="tetris">
                <Board 
                    width={this.state.width}
                    height={this.state.height}
                    activeSquares={this.state.activeSquares}
                />
                <button
                    onClick={this.handleClick}
                >Add piece</button>
            </div>
        )
    }
}
