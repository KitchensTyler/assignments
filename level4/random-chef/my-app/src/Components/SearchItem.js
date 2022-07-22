import React from 'react'

const SearchItem = (props) => {
  return (
    <div className='search-results'>
        <h3>{props.item?.strMeal}</h3>
        <img src={props.item?.strMealThumb}/>
    </div>
  )
}

export default SearchItem

