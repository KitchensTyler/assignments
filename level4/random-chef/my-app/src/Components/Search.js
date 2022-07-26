import React, {useState} from 'react'
import SearchItem from './SearchItem'
import '../css/Search.css'


export const Search = (props) => {
    const[searchTerm, setSearchTerm] = useState({
        type: "c",
        term:"",
    })

    function handleChange(event){
        const {name, value} = event.target
        setSearchTerm(prevTerm => ({...prevTerm, [name]: value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        props.searchMeal(searchTerm.term, searchTerm.type)
        setSearchTerm({
            type: "c",
            term:"",
        })
    }

   const searchList = function() {
    return props.searchResults ?  props.searchResults?.map(item => {
    
    return(
       <SearchItem item={item} key={item.idMeal}/>
    )
   }) : <div className='invalid-res'> <h2> Invalid search results</h2> <ol>For Categories try: 
     <br/> <li>"Beef",</li> <li>"Breakfast",</li> <li>"Chicken",</li> <li>"Desert",</li> <li>"Goat",</li> <li>"Lamb",</li> <li>"Miscellaneous",</li> <li>"Pasta",</li> <li>"Pork",</li> <li>"Seafood",</li>  <li>"Side",</li>  <li>"Starter",</li> <li>"Vegan",</li> <li>"Vegetarian".</li>
   </ol>
    <ol> For Areas try: <br />
            <li>"American",</li> <li>"British",</li> <li>"Canadian",</li><li>"Chinese",</li> <li>"Croation",</li> <li>"Dutch",</li> <li>"Egyptian",</li> <li>"French",</li> <li>"Greek",</li> 
            <li>"Indian",</li> <li>"Irish",</li> <li>"Italian",</li> <li>"Jamaican",</li> <li>"Japanese",</li> <li>"Kenyan",</li>  <li>"Malaysian",</li> <li>"Mexican",</li> <li>"Moroccan",</li> <li>"Poland",</li> <li>"Portuguese",</li>
            <li>"Russian",</li> <li>"Spanish",</li> <li>"Thai",</li> <li>"Tunisian",</li> <li>"Turkish",</li> <li>"Vietnamese".</li>
        </ol>
        </div>
   }

  return (
    <>
    <div className='search-background'>
    <div className='search-form'>
        <form onSubmit={handleSubmit}>
            <input name='term'
            value={searchTerm.term}
            onChange={handleChange}
            className='search-input'
            />
            <select name='type'
            value={searchTerm.type}
            onChange={handleChange}
            className='search-select'>
                <option value="c">Category</option>
                <option value="a">Area</option>
            </select>
            <button className='search-btn'>Search</button>
        </form>
    </div>
    {searchList()}
    <div className='try-this'> 
     <h3 className='cat-title'>For Categories try: </ h3>
   
    <div className='cat-response'>
        <br />
        <li>"Beef",</li> <li>"Breakfast",</li> <li>"Chicken",</li> <li>"Desert",</li> <li>"Goat",</li> <li>"Lamb",</li> <li>"Miscellaneous",</li> <li>"Pasta",</li> <li>"Pork",</li> <li>"Seafood",</li>  <li>"Side",</li>  <li>"Starter",</li> <li>"Vegan",</li> <li>"Vegetarian".</li>
    </div>
    <h3 className='area-title'> For Areas try: </h3> 
        <div className='area-response'>
            <br />
            <li>"American",</li> <li>"British",</li> <li>"Canadian",</li><li>"Chinese",</li> <li>"Croation",</li> <li>"Dutch",</li> <li>"Egyptian",</li> <li>"French",</li> <li>"Greek",</li> 
            <li>"Indian",</li> <li>"Irish",</li> <li>"Italian",</li> <li>"Jamaican",</li> <li>"Japanese",</li> <li>"Kenyan",</li> <li>"Malaysian",</li> <li>"Mexican",</li> <li>"Moroccan",</li> <li>"Poland",</li> <li>"Portuguese",</li>
            <li>"Russian",</li> <li>"Spanish",</li> <li>"Thai",</li> <li>"Tunisian",</li> <li>"Turkish",</li> <li>"Vietnamese".</li>
        </div>
        </div> 
        </div>
</>
  )
}
