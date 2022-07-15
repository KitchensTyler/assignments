import {React, useState, useEffect} from 'react'
import './App.css'

export default function Color(){
    const [color, setColor] = useState({
})

const [allColors, setAllColors] = useState([])

useEffect(() => {
    fetch("https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}")
        .then(res => res.json())
        .then(data => setColor(data.colors[0].hex))
}, [])

// function getColor() {
//     const randomNumber = Math.floor(Math.random() * allColors.length)
//     const url = allColors[randomNumber].url
//     setColor(prevColor => ({
//         ...prevColor,
//         randomColor: url
//     }))
    
// }

// function handleChange(event) {
//     const {name, value} = event.target
//     setColor(prevColor => ({
//         ...prevColor,
//         [name]: value
//     }))
// }

    return(
        console.log(color),
        <div style={{backgroundColor:`#${color}`,
                    height: '900px',
                    width: '900px'}}/>
    )
}