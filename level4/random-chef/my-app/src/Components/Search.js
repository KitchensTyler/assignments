import React, {useState} from 'react'
import SearchItem from './SearchItem'


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
     <br/> <l1>"Beef",</l1> <l1>"Breakfast",</l1> <l1>"Chicken",</l1> <l1>"Desert",</l1> <l1>"Goat",</l1> <l1>"Lamb",</l1> <l1>"Miscellaneous",</l1> <l1>"Pasta",</l1> <l1>"Pork",</l1> <l1>"Seafood",</l1>  <l1>"Side",</l1>  <l1>"Starter",</l1> <l1>"Vegan",</l1> <l1>"Vegetarian".</l1>
   </ol>
    <ol> For Areas try: <br />
            <l1>"American",</l1> <l1>"British",</l1> <l1>"Canadian",</l1><l1>"Chinese",</l1> <l1>"Croation",</l1> <l1>"Dutch",</l1> <l1>"Egyptian",</l1> <l1>"French",</l1> <l1>"Greek",</l1> 
            <l1>"Indian",</l1> <l1>"Irish",</l1> <l1>"Italian",</l1> <l1>"Jamaican",</l1> <l1>"Japanese",</l1> <l1>"Kenyan",</l1> <br /> <l1>"Malaysian",</l1> <l1>"Mexican",</l1> <l1>"Moroccan",</l1> <l1>"Poland",</l1> <l1>"Portuguese",</l1>
            <l1>"Russian",</l1> <l1>"Spanish",</l1> <l1>"Thai",</l1> <l1>"Tunisian",</l1> <l1>"Turkish",</l1> <l1>"Vietnamese".</l1>
        </ol>
        </div>
   }

  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <input name='term'
            value={searchTerm.term}
            onChange={handleChange}
            />
            <select name='type'
            value={searchTerm.type}
            onChange={handleChange}>
                <option value="c">Category</option>
                <option value="a">Area</option>
            </select>
            <button>Search</button>
        </form>
    </div>
    {searchList()}
</>
  )
}
