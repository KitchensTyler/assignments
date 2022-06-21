import React from 'react'

export default function Buttons(props) {

    
    return (<div className='btnDiv'>
    <button onClick={props.djSmall} className='btn'>DJ Small</button>
    <button onClick={props.topPurp} className='btn'>Party DJ</button>
    <button onClick={props.leftBlue} className='btn'>Left Blue</button>
    <button onClick={props.rightBlue} className='btn'>Right Blue</button>
    <button onClick={props.bigTime0} className='btn'>Big DJ one</button>
    <button onClick={props.bigTime1} className='btn'>Big DJ Two</button>
    <button onClick={props.bigTime2} className='btn'>Big DJ Three</button>
    <button onClick={props.bigTime3} className='btn'>Big DJ Four</button>
    <button onClick={props.makeNoise} className='btn'>Make Noise</button>
    </div>);
  }
