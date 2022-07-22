import React, {useState, useEffect} from 'react'
import {Link, Routes, Route, useParams,} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import axios from 'axios'
import { Search }   from './Components/Search'
import MealDetail from './Components/MealDetail'
// import Saved from './Components/Saved'
 //create function for searching parameter/get response set as state

export default function App(){
const [randomMeal, setRandomMeal] = useState({})
const [searchResults, setSearchResults] = useState([])
const [saveMeal, setSaveMeal] = useState([])

const [mealDetail, setMealDetail] = useState({
  strMeal: '',
  strMealThumb: '',
  strArea: '',
  strInstructions: '',
  strIngredient: [],
  idMeal: ''
})

useEffect(() => {
  getRandomMeal()
}, [])

function getRandomMeal(){
  axios.get('https://www.themealdb.com/api/json/v1/1/random.php',)
  .then(res => {
    console.log(res)
    setRandomMeal(res.data.meals[0])
  })
  .catch(err => console.log(err))
}

function searchMeal(term, type){
 axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?${type}=${term}`)
 .then(res => setSearchResults(res.data.meals))
 .catch(err => console.log(err))
}

    

function MealRecipe(){

  const {idMeal} = useParams()

  axios.get(`www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
  .then(res => {
    const ingredientArr = [ ]
    const measureArr = [ ]

    for(const [key, value] of Object.entries(res.data.meals[0])){
      if (key.includes('strIngredient') && value !== null){
        ingredientArr.push(value)
      }
    }

    for (const [key, value] of Object.entries(res.data.meals[0])){
      if(key.includes('strMeasure') && value !== null){
        measureArr.push(value)
      }
    }

    const ingredientList = [ ]

    for (let i =0; i < ingredientArr.length; i++){
      ingredientList.push({
        ingredientName: ingredientArr[i],
        ingredientMeasure: measureArr[i]
      })
    }

    console.log(ingredientList)

    setMealDetail({
      idMeal: res.data.meals[0].idMeal,
      strMeal: res.data.meals[0].strMeal,
      strMealThumb: res.data.meals[0].strMealThumb,
      strCategory: res.data.meals[0].strCategory,
      strInstructions: res.data.meals[0].strInstructions,
      strIngredient : ingredientList
     })
     .catch(err => console.log(err))
    }, [ idMeal])
 
}


return (
    <>
      <nav className='navbar'>
        <Link to ='/' className='link-style'>HOME</Link>
        <Link to ='/about' className='link-style'>ABOUT</Link>
        <Link to ='/search' className='link-style'>SEARCH BY</Link>
        <Link to ='/saved' className='link-style'>SAVED MEALS</Link>
      </nav>
      
      <Routes>
        <Route path ='/' element = {<Home randomMeal={randomMeal} getRandomMeal={getRandomMeal}/>} />
        <Route path = "/about" element = {<About />} />
        <Route path = 'randomMeal/mealDetail/:idMeal/' element={<MealDetail mealRecipe={MealRecipe}/>} />
        <Route path ='/search' element = {<Search searchResults={searchResults} searchMeal={searchMeal} />} />
        {/* <Route path ='/saved' element = {<Saved savedList={savedList} />} /> */}
      </Routes>
    </>
)
}