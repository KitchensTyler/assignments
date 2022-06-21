import React from 'react'

export default function DiceBox(){

    const randomNum = Math.floor(Math.random() * 6)
    const randomNum1 = Math.floor(Math.random() * 6)
    const randomNum2 = Math.floor(Math.random() * 6)
    const randomNum3 = Math.floor(Math.random() * 6)
    const randomNum4 = Math.floor(Math.random() * 6)
    const [number, setNumber] = React.useState([1,2,3,4,5])


    function newNums(){
        setNumber([randomNum,randomNum1,randomNum2,randomNum3,randomNum4])
    }


    const newRanNum = Math.floor(Math.random() * 6)


    return (
        <div className='ranNum'>
            <h1>{number[0]} {number[1]} {number[2]} {number[3]} {number[4]}</h1>
            
        <div>
            <button className='diceBtn' onClick={newNums}>Roll Dice</button>
        </div>
        </div>
    )
}