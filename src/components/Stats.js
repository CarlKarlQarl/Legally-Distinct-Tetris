import React from 'react'

export default function Stats({ createSPiece, createRandomPiece, startGame, level, score, lines }) {
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
            <p>Level: {level}</p>
            <p>Score: {score}</p>
            <p>Lines: {lines}</p>
        </div>
    )
}
