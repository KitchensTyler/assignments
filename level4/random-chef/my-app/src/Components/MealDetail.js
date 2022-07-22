import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'



export default function MealDetail(props){

    const [mealDetail, setMealDetail] = useState({})

    const navigate = useNavigate()

// pass down props???

        return (
            <>
                <div className = "title-container">
                    <h1 className ="detail-title">"{mealDetail.strMeal}"</h1>
                </div>
                <div className = "strMeal-container">
                    <img className = "detail-img" alt = "" src = {mealDetail.strMealThumb} />
                    <div className = "details-container">
                    <h3 className = "detail area"><b>meal Area:</b> {mealDetail.strArea}</h3>
                    <h3 className = "detail ingredients"><b>Ingredients: </b>{mealDetail.strIngredient.map(ingredient => {
                        return (
                            <span key = {mealDetail.idMealstrMeal+ingredient.ingredientName}>{ingredient.ingredientMeasure}  {ingredient.ingredientName}, </span>
                        )
                    })}</h3>
                    <h3 className = "detail instructions "><b>Instructions:</b> {mealDetail.strInstructions}</h3>
                    <button className = "back-btn" onClick = {()=> navigate(-1)}>BACK</button>
                </div>
                </div>
              
            </>
        )
    
}
