import React from 'react'
 //map through saved meal state. link like in home.

 
const Saved = (props) => {
  return (
    <div> 
      <h1>SAVED MEALS</h1>
      <h3>{props.randomMeal?.item.strMeal}</h3>
      <img src={props.randomMeal?.item}/>
    </div>
  )
}

export default Saved