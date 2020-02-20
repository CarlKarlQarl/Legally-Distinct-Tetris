import React from 'react'
import Row from './Row'

export default function Board({ width, height, activeSquares}) {

    let stackOfRows = []
    for (let i = 0; i < height; i++){
        stackOfRows.push(
        <Row 
            key={i}
            width={width}
            activeSquares={activeSquares.filter(coord => {return coord.coordY === i})}
        />)
    }

    return (
        <div className="board">
            {stackOfRows}
        </div>
    )
}
