import React from 'react'
import Gradient from './Gradient'

export default function Options () {

    const [cssOne, setCssOne] = React.useState([])
    const [cssTwo, setCssTwo] = React.useState([])
    const [angle, setAngle] = React.useState([])

    return (
        <div className='body'>
            <Gradient col1={cssOne} col2={cssTwo} angleOf={angle}/>
        <div className='rightBox'>
            
            <h1 className='options'>Options</h1>
            <div>
                <h2>Color 1</h2>
                <h2>{cssOne}</h2>
                <input className='color1' type="color" value={cssOne} onChange={e => setCssOne(e.target.value)}></input>
            </div>
            <div>
                <h2>Color 2</h2>
                <h2>{cssTwo}</h2>
                <input className='color2' type="color" value={cssTwo} onChange={e => setCssTwo(e.target.value)} ></input>
            </div>
            <div>
                <h2>Angle</h2>
                <h2>{angle}</h2>
                <input type="number" placeholder='50?' value={angle}
                onChange={e => setAngle(e.target.value)}></input>
            </div>
        </div>
        </div>
    )
}