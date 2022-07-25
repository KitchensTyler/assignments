
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


export default function MealDetail(props){

        const [mealDetail, setMealDetail] = useState({})
        const {idMeal} = useParams()
        // console.log(idMeal)
      
        useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res => {
          const ingredientArr = [ ]
          const measureArr = [ ]
      
          for(const [key, value] of Object.entries(res.data.meals[0])){
            if (key.includes('strIngredient') && value !== ""){
              ingredientArr.push(value)
            }
          }
      
          for (const [key, value] of Object.entries(res.data.meals[0])){
            if(key.includes('strMeasure') && value !== ""){
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
            strArea:res.data.meals[0].strArea,
            strMeal: res.data.meals[0].strMeal,
            strMealThumb: res.data.meals[0].strMealThumb,
            strCategory: res.data.meals[0].strCategory,
            strInstructions: res.data.meals[0].strInstructions,
            strIngredient : ingredientList
           })
        })
           .catch(err => console.log(err))
          }, [ ])
       
        
      
   

    const navigate = useNavigate()

// pass down props???

        return (
            <>
                <div className = "title-container">
                    <h1>Meal Details</h1>
                    <h3 className ="detail-title">"{mealDetail?.strMeal}"</h3>
                </div>
                <div className = "strMeal-container">
                    <img className = "detail-img" alt = "" src = {mealDetail?.strMealThumb} />
                    <div className = "details-container">
                    <h2 className = "detail area"><b>Meal Origin:</b> {mealDetail?.strArea}</h2>
                    <h2 className = "detail ingredients"><b>Ingredients: </b>{mealDetail?.strIngredient?.map(ingredient => {
                        return (
                            <span key = {mealDetail?.idMealstrMeal+ingredient.ingredientName}>{ingredient.ingredientMeasure}  {ingredient.ingredientName}, </span>
                        )
                    })}</h2>
                    <h2 className = "detail instructions "><b>Instructions:</b> {mealDetail?.strInstructions}</h2>
                    <button className = "back-btn" onClick = {()=> navigate(-1)}>BACK</button>
                </div>
                </div>
              
            </>
        )
    
}
