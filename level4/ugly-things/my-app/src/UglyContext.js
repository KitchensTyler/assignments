import React, {useState, useEffect} from "react"
import axios from "axios"

const UglyContext = React.createContext()

function UglyContextProvider(props){


    // USESTATE ARRAY
    const [thingList, setThingList] = useState ([])

    const [newInput, setNewInput] = useState({
        title:"",
        description:"",
    })

    // API GET REQUEST
    
  
    
    useEffect(() => {
       axios.get('https://api.vschool.io/tylerkitchens/thing/',)
       .then(res => setThingList(res.data))
       .catch(err => console.log(err))
    }, [])

    // API POST REQUEST

    function postUglyThing(thing){
        axios.post('https://api.vschool.io/tylerkitchens/thing/' , thing)
            .then(res => setThingList(prevList => ([
                ...prevList, res.data
            ])))
            .catch(error => console.log(error))
    }

    // API EDIT REQUEST

    
    function editUglyThing(id, newInput){
        let update = {
            title: newInput.title,
            description: newInput.description
        }
        axios.put(`https://api.vschool.io/tylerkitchens/thing/${id}`, update)
            .then(res =>  console.log(res.data))
            .catch(err => console.log(err))
            setThingList(prevList => prevList.map(item => (item._id === id ? 
            {...item, title: newInput.title, description: newInput.description} : item)))
    }
    
    // API DELETE REQUEST

    function deleteUglyThing(id){
        console.log(id)
        axios.delete(`https://api.vschool.io/tylerkitchens/thing/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            setThingList(thingList.filter(listItem => ( listItem._id !== id)))
    }

    return(
        <UglyContext.Provider value={{
            thingList,
            newInput,
            setNewInput,
            setThingList,
            postUglyThing,
            deleteUglyThing,
            editUglyThing,
        }}>
            {props.children}
            </UglyContext.Provider>
    )
}


export  {UglyContext, UglyContextProvider}