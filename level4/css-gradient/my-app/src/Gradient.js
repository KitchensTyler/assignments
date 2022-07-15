import React from 'react'
export default function Gradient (props) {



    return (
        <div className='leftBox'>
            <div style={{background: `linear-gradient(${props.angleOf}deg,${props.col1},${props.col2})`}} className='gradient'></div>
            <textarea value={`background : linear-gradient(${props.angleOf}deg, ${props.col1} , ${props.col2}); 
-moz-background: linear-gradient(50deg, ${props.col1} , ${props.col2}); 
-webkit: linear-gradient(50deg, ${props.col1} , ${props.col2})`} readOnly></textarea>
        </div>
    )
}