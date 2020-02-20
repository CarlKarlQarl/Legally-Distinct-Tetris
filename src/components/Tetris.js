import React, { Component } from 'react'
import Pieces from "../Pieces"
import Board from './Board'

export default class Tetris extends Component {

    state = {
        width: 10,
        height: 24,
        activeSquares: []
    }

    createSPiece = () => {
        this.setState({
            activeSquares: [...Pieces.S, ...this.state.activeSquares]
        })
    }

    createRandomPiece = () => {
        let keys = Object.keys(Pieces)
        // console.log(Pieces[keys[ keys.length * Math.random() << 0]])
        this.setState({
            activeSquares: [...Pieces[keys[ keys.length * Math.random() << 0]], ...this.state.activeSquares]
        })
    }

    handleKeyDown = (event) => {
        if (event.key === "ArrowDown"){
            this.movePiece(0, 1)
        }
        if (event.key === "ArrowLeft"){
            this.movePiece(-1, 0)
        }
        if (event.key === "ArrowRight"){
            this.movePiece(1, 0)
        }
    }

    movePiece = (changeX = 0, changeY = 0) => {
        this.setState({
            activeSquares: [...this.state.activeSquares.map(square => {
                return {
                    coordX: square.coordX + changeX,
                    coordY: square.coordY + changeY
                }
            })]
        })
    }

    render() {
        return (
            <div 
                className="tetris"
                onKeyDown={this.handleKeyDown}
            >
                <Board 
                    width={this.state.width}
                    height={this.state.height}
                    activeSquares={this.state.activeSquares}
                />
                <button
                    onClick={this.createSPiece}
                >Add S piece</button>
                <button
                    onClick={this.createRandomPiece}
                >Add random piece</button>
            </div>
        )
    }
}
