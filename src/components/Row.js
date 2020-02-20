import React from 'react'
import Square from './Square'

export default function Row({ width, activeSquares }) {

    let rowOfSquares = []
    for (let i = 0; i < width; i++){
        rowOfSquares.push(
            <Square 
                key={i}
                targetted={activeSquares.find(coord => {return coord.coordX  === i}) ? true : false}
            />)
    }
    

    return (
        <div className="row">
            {rowOfSquares}
        </div>
    )
}
