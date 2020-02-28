import React from 'react'

export default function Square({ boardX, boardY, movingPiece, pilePieces }) {

    let piece = movingPiece && movingPiece.find(square => {
        return square.coordX === boardX && square.coordY === boardY && square.appear === true
    })

    let pieceColor = piece ? ` ${piece.color}` : ""

    let pile = pilePieces && pilePieces.find(square => {
        return square.coordX === boardX && square.coordY === boardY && square.appear === true
    })

    let pileColor = pile ? ` ${pile.color}` : ""

    return (
        <div className={"square" + pieceColor + pileColor}>
        </div>
    )
}
