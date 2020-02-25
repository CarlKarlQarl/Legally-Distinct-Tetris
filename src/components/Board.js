import React from 'react'
import Row from './Row'

export default function Board({ width, height, movingPiece, pilePieces }) {

    let stackOfRows = []
    for (let i = 0; i < height; i++){
        stackOfRows.push(
        <Row 
            key={i}
            boardY={i}
            width={width}
            movingPiece={movingPiece.filter(coord => {return coord.coordY === i})}
            pilePieces={pilePieces.filter(coord => {return coord.coordY === i})}
        />)
    }

    return (
        <div className="board">
            {stackOfRows}
        </div>
    )
}
