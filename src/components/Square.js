import React from 'react'

export default function Square({ boardX, boardY, movingPiece }) {

    let piece = movingPiece && movingPiece.find(square => {
        return square.coordX === boardX && square.coordY === boardY && square.appear === true
    }) ? " piece" : ""

    return (
        <div className={"square" + piece}>
        </div>
    )
}
