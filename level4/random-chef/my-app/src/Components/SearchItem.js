import React from 'react'
import {Link} from "react-router-dom"
import '../css/SearchResults.css'


const SearchItem = (props) => {

  return (
   
    <div className='search-results'>
      
        <Link className='detail-link' to = {`/mealDetail/${props.item?.idMeal}`}><h3 className="random-name">"{props.item?.strMeal}"</h3></Link>
        <Link to = {`/mealDetail/${props.item?.idMeal}`}><img alt = "Meal" className = "random-img" src = {props.item?.strMealThumb} /></Link>
        <br />
        <button onClick ={()=> props.addMeal(props.randomMeal)} className='save-btn'>Save Meal</button>
    </div>

  )
}

export default SearchItem

