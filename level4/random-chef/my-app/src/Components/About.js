import React from 'react'

const About = () => {
  return (
    <>
    <div className='about-container'>
        <h1 className='about-title'>The Random Chef</h1>
        <p className='about-des'> The Random Chef App was created By Tyler Kitchens as a part of the level 4 Capstone Project. This app is used to try and find new meals you may enjoy as well as the ability to save recipes and instructions for future use.</p>
    </div>

    
    <h2>PRIMARY FUNCTION</h2>
    <div className='random-container'>
    <h3>Generate a Random Meal</h3>
                    <p>Description: On the home page you will be greeted by a random meal. if you like the look of it you can save it or generate a new meal by pressing the "new Meal" button.</p>
                <h3>Search for a Meal by Name, Ingredient, Category, or Area</h3>  
                    <p>Description: Click "Search By" in the navbar to search for a specific meal by name or search for all meals that contain a specific Ingredient or if you want to be broad you can choose Categories and Areas to try and find new meals you may enjoy</p>  
                    <p>Click the Name or Image to view a detail page with ALL the details regarding the Meal</p>
    </div>
    </>
  )
}

export default About