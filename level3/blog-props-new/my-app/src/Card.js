import React from 'react'

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <h1>{props.item.title}</h1>
            <h4>{props.item.subTitle}</h4>
            <p>Posted by {props.item.author} on {props.item.date}</p>
            <hr/>
        </div>
    )
}