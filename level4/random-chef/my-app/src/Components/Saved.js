import React ,{useState}from 'react'

 //map through saved meal state. link like in home.

 
 const Saved = (props) => {

  const [savedMeal, setSavedMeal] = useState([])

  return (
    <div> 
      <h1>SAVED MEALS</h1>
      <h3>{props.randomMeal?.idMeal}</h3>
      <img src={props.randomMeal?.strMealThumb}/>
    </div>
  )
}

export default Saved