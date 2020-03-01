import React from 'react'

export default function Stats({ createSPiece, createRandomPiece, startGame, score }) {
    return (
        <div>
            <button
                onClick={createSPiece}
            >Add S piece</button>
            <button
                onClick={createRandomPiece}
            >Add random piece</button>
            <button
                onClick={startGame}
            >Start</button>
            <p>Score: {score}</p>
        </div>
    )
}
