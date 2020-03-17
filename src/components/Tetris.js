import React, { Component, createRef } from 'react'
import sample from 'lodash/sample'
import includes from "lodash/includes"
import Pieces from "../Pieces"
import Board from './Board'
import Stats from './Stats'

export default class Tetris extends Component {

    state = {
        width: 10,
        height: 24,
        movingPiece: [],
        pilePieces: [],
        running: false,
        level: 0,
        score: 0,
        lines: 0
    }

    createRandomPiece = () => {
        let randomPiece = sample(Pieces)
        this.setState({
            movingPiece: randomPiece
        }, this.isGameOver)
    }

    startGame = () => {
        this.setState({
            running: true
        }, () => {
            if (this.state.running) {
                this.droppingAnimation()
            }
            this.createRandomPiece()
        })
    }

    restartGame = () => {
        this.setState({
            movingPiece: [],
            pilePieces: [],
            running: false,
            level: 0,
            score: 0,
            lines: 0
        })
    }

    gameboard = createRef()

    focusOnGameBoard = () => {
        this.gameboard.current.focus()
    }

    handleKeyDown = (event) => {
        if (this.state.running){
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
                        appear: square.appear,
                        color: square.color
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
                        return (
                            pileCoord.coordX === pieceCoord.coordX + changeX
                            && pileCoord.coordY === pieceCoord.coordY
                            && pileCoord.appear === pieceCoord.appear
                        )
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
                    return (
                        pileCoord.coordX === pieceCoord.coordX 
                        && pileCoord.coordY === pieceCoord.coordY + changeY 
                        && pileCoord.appear === pieceCoord.appear
                    )
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
        if (this.state.running){
            this.movePiece(0, 1)
            setTimeout(this.droppingAnimation, 500 - (this.state.level * 50))
            //Quick game speed switch for Show and Tech
            // setTimeout(this.droppingAnimation, 500 - (this.state.lines * 60))
        }
    }

    rotatePiece = () => {
        let rotated = [...this.state.movingPiece]
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
            score: this.state.score + 1
        }, () => {
            this.clearCompleteLines()
            this.createRandomPiece()
        })
    }

    clearCompleteLines = () => {
        //Make a copy of state to work on
        let copyOfState = [...this.state.pilePieces]

        //Get a count of the number of blocks in each row
        //Adds the X coordinate + 1 because of the zero index
        let blocksInEachLine = this.state.pilePieces.reduce((memo, coord) => {
            if (isNaN(memo[coord.coordY] + coord.coordX)){
                memo[coord.coordY] = coord.coordX + 1
            } else {
                memo[coord.coordY] += coord.coordX + 1
            }
            return memo
        },[])

        //Converts the block counts into line numbers that need to be removed
        let linesToRemove = blocksInEachLine.reduce((memo, count, index) => {
            if (count >= 55) {
                memo.push(index)
            }
            return memo
        }, [])

        //Goes to the line number and removes the whole row
        let pileWithRemovedLines = copyOfState.reduce((memo, coord) => {
            if (!includes(linesToRemove, coord.coordY)){
                memo.push(coord)
            }
            return memo
        }, [])

        //Shifts the pile down for each line that was cleared
        let pileShiftedDown = pileWithRemovedLines.map(coord => {
            let shift = linesToRemove.reduce((memo, line) => {
                if (coord.coordY < line){
                    memo += 1
                }
                return memo
            }, 0)
            return {
                coordX: coord.coordX,
                coordY: coord.coordY + shift,
                appear: coord.appear,
                color: coord.color
            }
        })

        let pointsScored = 0
        switch(linesToRemove.length){
            case 1:
                pointsScored = 40 * (this.state.level + 1)
                break
            case 2:
                pointsScored = 100 * (this.state.level + 1)
                break
            case 3:
                pointsScored = 300 * (this.state.level + 1)
                break
            case 4:
                pointsScored = 1200 * (this.state.level + 1)
                break
            default:
                break
        }

        this.setState({
            pilePieces: pileShiftedDown,
            level: Math.floor((this.state.lines + linesToRemove.length) / 10),
            score: this.state.score + pointsScored,
            lines: this.state.lines + linesToRemove.length
        })
    }

    isGameOver = () => {
        let endGame = this.collidingPieces().find(pieceCoord => {
            return this.state.pilePieces.find(pileCoord => {
                return (
                    pileCoord.coordX === pieceCoord.coordX 
                    && pileCoord.coordY === pieceCoord.coordY
                    && pileCoord.appear === pieceCoord.appear
                )
            })
        }) ? true : false

        if (endGame){
            this.setState({
                running: false
            })
        }
    }

    render() {
        return (
            <div 
                className="tetris"
                ref={this.gameboard}
                tabIndex="0"
                onKeyDown={this.handleKeyDown}
            >
                <Board 
                    width={this.state.width}
                    height={this.state.height}
                    movingPiece={this.state.movingPiece}
                    pilePieces={this.state.pilePieces}
                />
                <Stats
                    startGame={this.startGame}
                    restartGame={this.restartGame}
                    running={this.state.running}
                    focusOnGameBoard={this.focusOnGameBoard}
                    level={this.state.level}
                    score={this.state.score}
                    lines={this.state.lines}
                />
            </div>
        )
    }
}
