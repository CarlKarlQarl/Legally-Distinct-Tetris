import React, { Component } from 'react'
import sample from 'lodash/sample'
import isEqual from "lodash/isEqual"
import includes from "lodash/includes"
import Pieces from "../Pieces"
import Board from './Board'

export default class Tetris extends Component {

    state = {
        width: 10,
        height: 24,
        movingPiece: [],
        pilePieces: [],
        running: false
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

    startGame = () => {
        this.createRandomPiece()
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
        
        if (this.checkBottomCollision(changeY)){
            this.nextPiece()
        }
        else if (!this.checkLeftRightCollision(changeX)) {
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
    }

    checkLeftRightCollision = (changeX) => {
        return this.collidingPieces().find(coord => {
            return (
                coord.coordX + changeX >= this.state.width 
                || coord.coordX + changeX < 0
                || this.state.pilePieces.find(pileCoord => {
                    return this.collidingPieces().find(pieceCoord => {
                        return isEqual(pileCoord, {
                            coordX: pieceCoord.coordX + changeX, 
                            coordY: pieceCoord.coordY, 
                            appear: pieceCoord.appear})
                    })
                })
            )
        }) ? true : false
    }

    checkBottomCollision = (changeY) => {
        return (
            this.collidingPieces().find(coord => {return coord.coordY + changeY >= this.state.height}) 
            || this.state.pilePieces.find(pileCoord => {
                return this.collidingPieces().find(pieceCoord => {
                    return isEqual(pileCoord, {
                        coordX: pieceCoord.coordX, 
                        coordY: pieceCoord.coordY + changeY, 
                        appear: pieceCoord.appear})
                })
            })
        ) ? true : false
    }

    collidingPieces = () => {
        return this.state.movingPiece.filter(coord => {
            return coord.appear === true
        })
    }

    droppingAnimation = () => {
        this.movePiece(0, 1)
        setTimeout(this.droppingAnimation, 200)
    }

    rotatePiece = () => {

        let rotated = this.state.movingPiece
        let savedAppear = [...this.state.movingPiece].map(coord => {
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

    //Revisit
    // checkRotateCollision = () => {
    //     let rotateTester = this.state.movingPiece.map(fuck => { return fuck })
    //     let savedAppearTester = [...this.state.movingPiece].map(coord => {
    //         return coord.appear
    //     })

    //     rotateTester[0].appear = savedAppearTester[12]
    //     rotateTester[1].appear = savedAppearTester[8]
    //     rotateTester[2].appear = savedAppearTester[4]
    //     rotateTester[3].appear = savedAppearTester[0]
    //     rotateTester[4].appear = savedAppearTester[13]
    //     rotateTester[5].appear = savedAppearTester[9]
    //     rotateTester[6].appear = savedAppearTester[5]
    //     rotateTester[7].appear = savedAppearTester[1]
    //     rotateTester[8].appear = savedAppearTester[14]
    //     rotateTester[9].appear = savedAppearTester[10]
    //     rotateTester[10].appear = savedAppearTester[6]
    //     rotateTester[11].appear = savedAppearTester[2]
    //     rotateTester[12].appear = savedAppearTester[15]
    //     rotateTester[13].appear = savedAppearTester[11]
    //     rotateTester[14].appear = savedAppearTester[7]
    //     rotateTester[15].appear = savedAppearTester[3]

    //     return rotateTester.find(coord => {
    //         return (
    //             coord.coordX >= this.state.width 
    //             || coord.coordX < 0 
    //             || coord.coordY >= this.state.height)
    //     }) ? true : false
    // }

    nextPiece = () => {
        this.setState({
            pilePieces: [...this.state.pilePieces, ...this.collidingPieces()],
        }, () => {
            this.clearCompleteLines()
            this.createRandomPiece()
        })
    }

    clearCompleteLines = () => {
        let copyOfState = [...this.state.pilePieces]

        let blocksInEachLine = this.state.pilePieces.reduce((memo, coord) => {
            if (isNaN(memo[coord.coordY] + coord.coordX)){
                memo[coord.coordY] = coord.coordX
            } else {
                memo[coord.coordY] += coord.coordX
            }
            return memo
        },[])

        let linesToRemove = blocksInEachLine.reduce((memo, count, index) => {
            if (count >= 45) {
                memo.push(index)
            }
            return memo
        }, [])

        let removedLines = copyOfState.reduce((memo, coord) => {
            if (!includes(linesToRemove, coord.coordY)){
                memo.push(coord)
            }
            return memo
        }, [])

        this.setState({
            pilePieces: removedLines
        })
    }

    componentDidUpdate = () => {
        if (!this.state.running) {
            this.setState({
                running: true
            })
            this.droppingAnimation()
        }
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
                    pilePieces={this.state.pilePieces}
                />
                <button
                    onClick={this.createSPiece}
                >Add S piece</button>
                <button
                    onClick={this.createRandomPiece}
                >Add random piece</button>
                <button
                    onClick={this.startGame}
                >Start</button>
                <button
                    onClick={this.stopGame}
                >Stop</button>
            </div>
        )
    }
}
