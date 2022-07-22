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
            type: "",
            term:"",
        })
    }

   const searchList = props.searchResults.map(item => {
    return(
       <SearchItem item={item}/>
    )
   })

  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            {/* <input type={}/> */}
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
    {searchList}
</>
  )
}
