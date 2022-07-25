
import React, {useState} from "react"
import {Link} from "react-router-dom"

const Home = (props) => {
    

  return (
    <>
        <div className='background'>
            <header className='header-title'>The Random Chef App</header>
            <h3 className='header-desc'>Created By: Tyler Kitchens</h3>
        </div>
        <div className='random-container'>
            <Link className='detail-link' to = {`/mealDetail/${props.randomMeal.idMeal}`}><h3 className="random-name">"{props.randomMeal.strMeal}"</h3></Link>
            <Link to = {`/mealDetail/${props.randomMeal.idMeal}`}><img alt = "Meal" className = "random-img" src = {props.randomMeal.strMealThumb} /></Link>
            <br />
            <button onClick={props.getRandomMeal} className='random-btn'>Get New Meal</button>
            <button onClick ={()=> props.addMeal(props.randomMeal.item)}>Save</button>
        </div>
    </>
   
  )
}

export default Home