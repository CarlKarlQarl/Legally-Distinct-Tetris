import React from 'react'
import Square from './Square'

export default function Row({ width, boardY, movingPiece, pilePieces }) {

    let rowOfSquares = []
    for (let i = 0; i < width; i++){
        rowOfSquares.push(
            <Square 
                key={i}
                boardX={i}
                boardY={boardY}
                movingPiece={movingPiece.find(coord => {return coord.coordX  === i && coord.appear === true}) ? movingPiece : null}
                pilePieces={pilePieces.find(coord => {return coord.coordX  === i && coord.appear === true}) ? pilePieces : null}
            />)
    }
    

    return (
        <div className="row">
            {rowOfSquares}
        </div>
    )
}
