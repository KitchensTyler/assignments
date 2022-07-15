import React from 'react'
import Meme from './Meme'


export default function (props){
    console.log(props.randomImage)
    return(
        <>
            <div className='list'>
                <img src={props.randomImage} />
                <button onClick={props.onDelete}>delete</button>
            </div>
        </>
    )
}