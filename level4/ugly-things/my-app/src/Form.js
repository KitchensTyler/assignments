import React, {useContext, useState} from 'react'
import { UglyContext } from './UglyContext'

function Form(){

    const {postUglyThing} = useContext(UglyContext)

    const [thing, setThing] = useState({
        title:"",
        description:"",
        imgUrl:"",
    })

    function handleChange(event){
        const {name, value} = event.target
        setThing(prevThing => ({...prevThing, [name]: value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        postUglyThing(thing)
        setThing({
            title: "",
            description: "",
            imgUrl: "",
        })
    }

return(
    <form className='uglyForm' onSubmit={handleSubmit}>
        <div className='Container'>
                <input className='inputs'
                    type="text"
                    placeholder='Title'
                    name='title'
                    value={thing.title}
                    onChange={handleChange}
                    />
        
                    <input className='inputs'
                        type="text"
                        placeholder='Description'
                        name='description'
                        value={thing.description}
                        onChange={handleChange}/>
                        
                    <input className='inputs'
                        type="text"
                        placeholder='Image Url'
                        name='imgUrl'
                        value={thing.imgUrl}
                        onChange={handleChange}
                    />
                    
                    <div className='buttonContainer'>
                    <button className='subBtn'>Submit</button>
                    </div>
            </div>
        </form>
    )
}
export default Form