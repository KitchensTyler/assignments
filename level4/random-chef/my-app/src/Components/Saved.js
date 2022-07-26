import React ,{useState}from 'react'
import {Link} from "react-router-dom"
import "../css/Saved.css"

 //map through saved meal state. link like in home.

 
 const Saved = (props) => {

  const elements = props.savedMeal.map(meal => {
    return(
      <>
      <div className='saved-meals'>
        <Link className='detail-link' to = {`/mealDetail/${meal.idMeal}`}><h3 className="random-name">"{meal.strMeal}"</h3></Link>
        <Link to = {`/mealDetail/${meal.idMeal}`}><img alt = "Meal" className = "random-img" src = {meal.strMealThumb} /></Link>
      </div>
      </>
    )
  })

console.log(props.savedMeal)

  return (
    <div className='saved-meals'> 
      <h1 className='saved-title'>SAVED MEALS</h1>
      {elements}
    </div>
  )
}

export default Saved