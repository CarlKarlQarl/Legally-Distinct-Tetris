import React from 'react'

export default function Square({ boardX, boardY, movingPiece, pilePieces }) {

    let piece = movingPiece && movingPiece.find(square => {
        return square.coordX === boardX && square.coordY === boardY && square.appear === true
    }) ? " piece" : ""

    let pile = pilePieces && pilePieces.find(square => {
        return square.coordX === boardX && square.coordY === boardY && square.appear === true
    }) ? " pile" : ""

    return (
        <div className={"square" + piece + pile}>
        </div>
    )
}
