import React from 'react'


export default function Card(props) {
    let backGroundColor
    if (props.item.timeToGo === "Spring"){
        backGroundColor = 'LightGreen'
    } else if (props.item.timeToGo === "Summer"){
        backGroundColor = 'Gold'
    } else if (props.item.timeToGo === "Winter"){
        backGroundColor = 'LightBlue'
    } else if (props.item.timeToGo === "Fall"){
        backGroundColor = 'Orange'
    }
    let priceTag
    if (props.item.price <= 500){
        priceTag = "$"
    } else if (props.item.price >= 500 && props.item.price <=1000){
        priceTag = "$$"
    } else if (props.item.price >= 1000){
        priceTag = "$$$"
    }
    return (
        <div className="card" style={{backgroundColor:backGroundColor}}>
            <div className='info'>
            <h1>{props.item.place}</h1>
            <h1>{priceTag} {props.item.price}</h1></div>
            <div className='picAndBtn'>
            <img className='img' src={props.item.imgUrl}></img>
            <div><button className='btns'>Buy Now</button>
            <button className='btns'>Details</button></div>
            </div>
        </div>
    )
}