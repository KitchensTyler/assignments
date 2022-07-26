import React, {useState, useEffect} from 'react'
import {Link, Routes, Route, useParams,} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import axios from 'axios'
import { Search }   from './Components/Search'
import MealDetail from './Components/MealDetail'
import Saved from './Components/Saved'
import Footer from './Components/Footer'
import "./css/App.css"


export default function App(){
const [randomMeal, setRandomMeal] = useState({})
const [searchResults, setSearchResults] = useState([])
const [savedMeal, setSavedMeal] = useState([])


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
    // console.log(res)
    setRandomMeal(res.data.meals[0])
  })
  .catch(err => console.log(err))
}

function searchMeal(term, type){
  console.log("search meal was called")
 axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?${type}=${term}`)
 .then(res => {
  console.log(res.data.meals)
  setSearchResults(res.data.meals)})
 .catch(err => console.log(err))
}

 function addMeal(item){
  console.log("Added Meal")
    setSavedMeal(prevMeal => ([...prevMeal, item]))
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
        <Route path ='/' element = {<Home randomMeal={randomMeal} getRandomMeal={getRandomMeal} addMeal={addMeal}/>} />
        <Route path = "/about" element = {<About />} />
        <Route path = '/mealDetail/:idMeal/' element={<MealDetail />} />
        <Route path ='/search' element = {<Search searchResults={searchResults} searchMeal={searchMeal} />} />
        <Route path ='/saved' element = {<Saved savedMeal={savedMeal} addMeal={addMeal}/>} />
      </Routes>
      <Footer />
    </>
)
}