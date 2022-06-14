import React from 'react'
export default function Pet(props) {
    return (
        <div className="petsList">
            <h1>{props.name}</h1>
            <h1>{props.breed}</h1>
        </div>
    )
}