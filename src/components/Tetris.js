import React, { Component } from 'react'
import sample from 'lodash/sample'
import Pieces from "../Pieces"
import Board from './Board'

export default class Tetris extends Component {

    state = {
        width: 10,
        height: 24,
        movingPiece: []
    }

    createSPiece = () => {
        this.setState({
            movingPiece: Pieces.S
        })
    }

    createRandomPiece = () => {
        let randomPiece = sample(Pieces)
        this.setState({
            movingPiece: randomPiece
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
        if (event.key === "ArrowUp"){
            this.rotatePiece()
        }
    }

    movePiece = (changeX = 0, changeY = 0) => {
        this.setState({
            movingPiece: [...this.state.movingPiece.map(square => {
                return {
                    coordX: square.coordX + changeX,
                    coordY: square.coordY + changeY,
                    appear: square.appear
                }
            })]
        })
    }

    rotatePiece = () => {
        let rotated = this.state.movingPiece
        let savedAppear = this.state.movingPiece.map(coord => {
            return coord.appear
        })

        rotated[0].appear = savedAppear[12]
        rotated[1].appear = savedAppear[8]
        rotated[2].appear = savedAppear[4]
        rotated[3].appear = savedAppear[0]
        rotated[4].appear = savedAppear[13]
        rotated[5].appear = savedAppear[9]
        rotated[6].appear = savedAppear[5]
        rotated[7].appear = savedAppear[1]
        rotated[8].appear = savedAppear[14]
        rotated[9].appear = savedAppear[10]
        rotated[10].appear = savedAppear[6]
        rotated[11].appear = savedAppear[2]
        rotated[12].appear = savedAppear[15]
        rotated[13].appear = savedAppear[11]
        rotated[14].appear = savedAppear[7]
        rotated[15].appear = savedAppear[3]

        this.setState({
            movingPiece: rotated
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
                    movingPiece={this.state.movingPiece}
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
