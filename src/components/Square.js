import React from 'react'

export default function Square({ targetted }) {

    let colorTheSquare = targetted ? " targetted" : ""

    return (
        <div className={"square" + colorTheSquare}>
        </div>
    )
}
