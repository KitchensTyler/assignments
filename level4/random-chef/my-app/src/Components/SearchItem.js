import React from 'react'

const SearchItem = (props) => {
  return (
    <div className='search-results'>
        <h3>{props.item?.strMeal}</h3>
        <img src={props.item?.strMealThumb}/>
        <br />
        <button onClick ={()=> props.addMeal(props.randomMeal)}>Save</button>
    </div>
  )
}

export default SearchItem

